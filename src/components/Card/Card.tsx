import React from 'react';
import {View} from 'react-native';

type Props = {
  imageSrc: string;
  title: string;
};

/** Placeholder component */
export const Card = ({imageSrc, title}: Props) => {
  return (
    <View
      style={{
        width: 100,
        height: 200,
        backgroundColor: 'coral',
        marginHorizontal: 4,
      }}
    />
  );
};
