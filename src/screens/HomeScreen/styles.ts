import {StyleSheet, ViewStyle} from 'react-native';
import {theme} from '../../assets/theme';

type Styles = {
  screen: ViewStyle;
  section: ViewStyle;
};

export const styles = StyleSheet.create<Styles>({
  screen: {
    padding: theme.space.m,
  },
  section: {
    paddingBottom: theme.space.l,
  },
});
