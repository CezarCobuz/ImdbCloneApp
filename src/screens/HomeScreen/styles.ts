import {StyleSheet, ViewStyle} from 'react-native';
import {theme} from '../../assets/theme';

type Styles = {
  screen: ViewStyle;
};

export const styles = StyleSheet.create<Styles>({
  screen: {
    paddingHorizontal: theme.space.m,
  },
});
