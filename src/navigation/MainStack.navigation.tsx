import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreens, RootStackParamList} from './routes';
import {HomeScreen} from '../screens/HomeScreen/Home.screen';
import {DetailsScreen} from '../screens/DetailsScreen/Details.screen';
import {strings} from '../assets/strings';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={MainScreens.Home}>
      <Stack.Screen
        name={MainScreens.Home}
        component={HomeScreen}
        options={{title: strings.homeScreen.title}}
      />
      <Stack.Screen
        name={MainScreens.Details}
        component={DetailsScreen}
        options={({route}) => ({title: route.params.title})}
        initialParams={{movieId: ''}}
      />
    </Stack.Navigator>
  );
};
