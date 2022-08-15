export enum MainScreens {
  Home = 'HomeScreen',
  Details = 'DetailsScreen',
}

type DetailsScreenParams = {
  movieId: string;
  title: string;
  posterUrl: string;
  director: string;
  actors: string;
  plot: string;
};

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: DetailsScreenParams;
};
