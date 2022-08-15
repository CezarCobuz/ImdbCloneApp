import React from 'react';
import {ScrollView, Text} from 'react-native';

type CarouselItemType = any;

type Props = {
  title?: string;
  data: CarouselItemType[];
  renderItem: (item: CarouselItemType) => JSX.Element;
};

export const Carousel = ({
  title = '',
  data,
  renderItem,
}: Props): JSX.Element => {
  return (
    <>
      <Text>{title}</Text>
      <ScrollView horizontal>
        {data.map(dataItem => renderItem(dataItem))}
      </ScrollView>
    </>
  );
};
