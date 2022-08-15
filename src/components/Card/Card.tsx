import React from 'react';
import {
  GestureResponderEvent,
  Image,
  Pressable,
  Text,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';

type Props = {
  imageSrc: string;
  title: string;
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  style?: ViewStyle | null;
};

export const Card = ({imageSrc, title, onPress, style}: Props) => {
  return (
    <Pressable onPress={onPress} style={[styles.pressableContainer, style]}>
      <Image
        style={styles.poster}
        source={{
          uri: imageSrc,
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};
