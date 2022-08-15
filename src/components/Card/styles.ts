import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {theme} from '../../assets/theme';
import {POSTER_ASPECT_RATIO} from '../../shared/constants';

const CARD_WIDTH = 111;
const CARD_HEIGHT = 240;

type Styles = {
  pressableContainer: ViewStyle;
  poster: ImageStyle;
  title: TextStyle;
};

export const styles = StyleSheet.create<Styles>({
  pressableContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginRight: theme.space.m,
  },
  poster: {
    aspectRatio: POSTER_ASPECT_RATIO,
  },
  title: {
    fontSize: theme.fontSizes.s,
    padding: theme.space.s,
  },
});
