export type TMovie = TMovieDTO & {
  id: number;
};

export type TMovieDTO = {
  title: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
};
