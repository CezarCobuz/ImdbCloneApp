import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreens, RootStackParamList} from './routes';
import {HomeScreen} from '../screens/HomeScreen/Home.screen';
import {DetailsScreen} from '../screens/DetailsScreen/Details.screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={MainScreens.Home}>
      <Stack.Screen name={MainScreens.Home} component={HomeScreen} />
      <Stack.Screen
        name={MainScreens.Details}
        component={DetailsScreen}
        initialParams={{movieId: ''}}
      />
    </Stack.Navigator>
  );
};
