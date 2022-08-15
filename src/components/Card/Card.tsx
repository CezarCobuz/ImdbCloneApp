import React from 'react';
import {GestureResponderEvent, Pressable, View} from 'react-native';

type Props = {
  imageSrc: string;
  title: string;
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
};

/** Placeholder component */
export const Card = ({imageSrc, title, onPress}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          width: 100,
          height: 200,
          backgroundColor: 'coral',
          marginHorizontal: 4,
        }}
      />
    </Pressable>
  );
};
