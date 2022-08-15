import {StyleSheet, TextStyle} from 'react-native';
import {theme} from '../../assets/theme';
import {HOME_SCREEN_LEFT_SPACING} from '../../shared/constants';

type Styles = {
  title: TextStyle;
};

export const styles = StyleSheet.create<Styles>({
  title: {
    fontSize: theme.fontSizes.l,
    paddingLeft: HOME_SCREEN_LEFT_SPACING,
    paddingBottom: theme.space.m,
  },
});
