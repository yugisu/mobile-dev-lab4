import React, { useContext, useMemo, useState } from "react";
import { Button, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";

import { Routes } from "constants/Routes";
import { MovieContext } from "providers/MovieProvider";
import { TMovieDTO } from "types/Movie.type";

import { ScreenContainer, ScreenTitle } from "components/styled";

type Props = {
  navigation: any;
};

export const AddMovieScreen = ({ navigation }: Props) => {
  const [movieDraft, setMovieDraft] = useState<TMovieDTO>(() => getInitialMovieDraft());

  const validationErrors = useMemo(() => {
    return {
      year: movieDraft.year.length === 0 || Number.isNaN(Number(movieDraft.year)),
      title: movieDraft.title.length === 0,
      type: movieDraft.type.length === 0,
    };
  }, [movieDraft]);

  const { addMovie } = useContext(MovieContext);

  const bindInputToMovieField = (fieldName: keyof TMovieDTO) => (text: string) => setMovieDraft((prev) => ({ ...prev, [fieldName]: text }));

  const submitMovie = () => {
    const isMovieValid = Object.values(validationErrors).every((v) => !v);

    if (isMovieValid) {
      addMovie(movieDraft);

      navigation.navigate(Routes.MOVIES_LIST);
    }
  };

  return (
    <ScrollView>
      <ScreenContainer>
        <View style={{ paddingHorizontal: 15, paddingTop: 15 }}>
          <ScreenTitle>New movie</ScreenTitle>
        </View>

        <View style={{ paddingHorizontal: 15, paddingTop: 15 }}>
          <Text>Title*</Text>

          <FieldInput value={movieDraft.title} onChangeText={bindInputToMovieField("title")} />
        </View>

        <View style={{ paddingHorizontal: 15, paddingTop: 10 }}>
          <Text>Type*</Text>

          <FieldInput value={movieDraft.type} onChangeText={bindInputToMovieField("type")} />
        </View>

        <View style={{ paddingHorizontal: 15, paddingTop: 10 }}>
          <Text>Year*</Text>

          <FieldInput value={movieDraft.year} onChangeText={bindInputToMovieField("year")} />
        </View>

        <View style={{ paddingHorizontal: 15, paddingTop: 15 }}>
          <Button title="Add movie" onPress={submitMovie} disabled={Object.values(validationErrors).some((v) => v)} />
        </View>
      </ScreenContainer>
    </ScrollView>
  );
};

const FieldInput = styled.TextInput`
  padding: 5px 10px;

  background-color: #fff;
`;

function getInitialMovieDraft(): TMovieDTO {
  return {
    imdbID: "noid",
    poster: "",
    title: "",
    type: "",
    year: "",
  };
}
