export enum MainScreens {
  Home = 'HomeScreen',
  Details = 'DetailsScreen',
}

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: {movieId: string};
};
