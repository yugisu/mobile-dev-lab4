import React from "react";
import { Text, View } from "react-native";

import type { TMovie } from "types/Movie.type";

import { MovieCard } from "components/MovieCard/MovieCard";

type Props = {
  movies: TMovie[];
};

export const MovieList = ({ movies }: Props) => {
  return (
    <View style={{ height: "100%" }}>
      {movies.map((movie, idx) => (
        <MovieCard movie={movie} key={idx} />
      ))}

      {!movies.length && (
        <View style={{ width: "100%", paddingVertical: 20 }}>
          <Text style={{ textAlign: "center" }}>No movies to display</Text>
        </View>
      )}
    </View>
  );
};
