import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";

import { TMovie } from "types/Movie.type";

type Props = {
  movie: TMovie;
};

export const MovieCard = ({ movie }: Props) => {
  return (
    <Container>
      <View style={{ paddingBottom: 10 }}>
        <Title>{movie.title}</Title>
      </View>

      <View>
        <Text>
          Type: {movie.type} | Year: {movie.year}
        </Text>
      </View>

      <View>
        <Text>imDB id: {movie.imdbID}</Text>
      </View>

      <View>
        <Text>Poster name: {movie.poster}</Text>
      </View>
    </Container>
  );
};

const Container = styled.View`
  margin-top: 20px;

  padding: 5px 10px;

  background-color: ${(props) => props.theme.movieCard.background};
`;

const Title = styled.Text`
  font-weight: bold;
`;
