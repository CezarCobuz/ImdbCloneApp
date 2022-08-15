import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../navigation/routes';

type Props = NativeStackScreenProps<RootStackParamList, 'DetailsScreen'>;

// Send only movie id here ?
export const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;
  console.log('+++ movieId', movieId);
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </SafeAreaView>
  );
};
