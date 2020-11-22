import React, { useMemo, useState } from "react";
import { TextInput, View } from "react-native";
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";

import movieListData from "static/MoviesList.json";

import { MovieList } from "components/MovieList/MovieList";
import { ScreenContainer, ScreenTitle } from "components/styled";

export const MovieListScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const moviesToDisplay = useMemo(
    () => movieListData.search.filter((movie) => movie.title?.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery]
  );

  return (
    <ScrollView>
      <ScreenContainer>
        <View style={{ paddingHorizontal: 15 }}>
          <ScreenTitle>Movies</ScreenTitle>
        </View>

        <View style={{ paddingTop: 15, paddingHorizontal: 15 }}>
          <SearchInput value={searchQuery} onChangeText={(text) => setSearchQuery(text)} />
        </View>

        <MovieCardsContainer>
          <MovieList movies={moviesToDisplay} />
        </MovieCardsContainer>
      </ScreenContainer>
    </ScrollView>
  );
};

const MovieCardsContainer = styled.View`
  height: 100%;

  padding: 10px 15px;
`;

const SearchInput = styled.TextInput`
  padding: 5px 10px;

  background: ${(props) => props.theme.movieCard.background};
`;
