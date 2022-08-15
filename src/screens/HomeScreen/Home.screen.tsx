import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../navigation/routes';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export const HomeScreen = () => {
  const navigation = useNavigation<Props['navigation']>();
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details Screen"
        onPress={() => navigation.navigate('DetailsScreen', {movieId: '86,'})}
      />
    </SafeAreaView>
  );
};
