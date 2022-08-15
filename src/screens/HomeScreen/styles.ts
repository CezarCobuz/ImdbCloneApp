import {StyleSheet, ViewStyle} from 'react-native';
import {theme} from '../../assets/theme';
import {HOME_SCREEN_LEFT_SPACING} from '../../shared/constants';

type Styles = {
  screen: ViewStyle;
  section: ViewStyle;
  firstItemOffset: ViewStyle;
};

export const styles = StyleSheet.create<Styles>({
  screen: {
    paddingVertical: theme.space.m,
  },
  section: {
    paddingBottom: theme.space.l,
  },
  firstItemOffset: {
    paddingLeft: HOME_SCREEN_LEFT_SPACING,
  },
});
