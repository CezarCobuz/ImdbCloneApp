import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {MainStackNavigation} from './navigation/MainStack.navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
