import {StyleSheet, TextStyle} from 'react-native';
import {theme} from '../../assets/theme';

type Styles = {
  title: TextStyle;
};

export const styles = StyleSheet.create<Styles>({
  title: {
    fontSize: theme.fontSizes.l,
    paddingBottom: theme.space.s,
  },
});
