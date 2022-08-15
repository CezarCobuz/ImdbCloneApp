import React from 'react';
import {ScrollView, Text, View, ViewStyle} from 'react-native';
import {styles} from './styles';

type CarouselItemType = any;

type Props = {
  title?: string;
  data: CarouselItemType[];
  renderItem: (item: CarouselItemType, index: number) => JSX.Element;
  style?: ViewStyle | null;
};

export const Carousel = ({
  title = '',
  data,
  renderItem,
  style,
}: Props): JSX.Element => {
  return (
    <View style={style}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((dataItem, index) => renderItem(dataItem, index))}
      </ScrollView>
    </View>
  );
};
