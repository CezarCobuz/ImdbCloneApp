import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {theme} from '../../assets/theme';
import {POSTER_ASPECT_RATIO} from '../../shared/constants';

type Styles = {
  flexed: ViewStyle;
  poster: ImageStyle;
  spacer: ViewStyle;
  textDetailsContainer: ViewStyle;
  plotText: TextStyle;
  directorText: TextStyle;
  actorsText: TextStyle;
};

export const styles = StyleSheet.create<Styles>({
  flexed: {
    flex: 1,
  },
  poster: {
    // height: 100,
    // height: '100%',
    // aspectRatio: 1,
    // resizeMode: 'cover',
    // width: '100%',
    // flex: 1,
    // resizeMode: 'center',
    // height: '100%',
    aspectRatio: POSTER_ASPECT_RATIO,
  },
  spacer: {
    paddingTop: theme.space.m,
  },
  textDetailsContainer: {
    paddingHorizontal: theme.space.l,
    paddingVertical: theme.space.m,
  },
  plotText: {
    fontSize: theme.fontSizes.s,
  },
  directorText: {
    fontSize: theme.fontSizes.m,
    fontWeight: 'bold',
  },
  actorsText: {
    fontSize: theme.fontSizes.l,
  },
});
