import React, { useContext, useMemo } from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationProp, Route } from "@react-navigation/native";

import { Routes } from "constants/Routes";
import { PosterImages } from "static/Posters";
import { MovieContext } from "providers/MovieProvider";

import { ScreenContainer, ScreenTitle } from "components/styled";

type Props = {
  navigation: NavigationProp<{}>;
  route: Route<typeof Routes.MOVIE_DETAILS, { movieId: number }>;
};

export const MovieDetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;

  const { movies } = useContext(MovieContext);

  const movieToDisplay = useMemo(() => movies.find((movie) => movie.id === movieId), [movies, movieId]);

  return (
    <ScrollView>
      <ScreenContainer>
        {movieToDisplay ? (
          <>
            {Boolean(movieToDisplay.poster && PosterImages[movieToDisplay.poster]) && (
              <Image source={PosterImages[movieToDisplay.poster]} style={{ width: "100%" }} />
            )}

            <View style={{ paddingHorizontal: 15, paddingTop: 15 }}>
              <ScreenTitle>{movieToDisplay.title}</ScreenTitle>
            </View>

            <View style={{ paddingHorizontal: 15, paddingTop: 15 }}>
              <Text>IMDB id: {movieToDisplay.imdbID}</Text>
              <Text>Type: {movieToDisplay.type}</Text>
              <Text>Year: {movieToDisplay.year}</Text>
            </View>
          </>
        ) : (
          <View>
            <View style={{ width: "100%", paddingVertical: 20 }}>
              <Text style={{ textAlign: "center" }}>Movie not found</Text>
            </View>
          </View>
        )}
      </ScreenContainer>
    </ScrollView>
  );
};
