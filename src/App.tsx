import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {MainStackNavigation} from './navigation/MainStack.navigation';

// TODO: Use this is the screen
// export const fetchMovies = fetch(
//   'https://raw.githubusercontent.com/24i/smartapps-test/main/data.json',
// );
// useEffect(() => {
//   fetchMovies
//     .then(res => res.json())
//     .then(
//       result => {
//         // setIsLoaded(true);
//         console.log('+++ result', JSON.stringify(result, null, 4));
//         // setTopStoriesIds(result);
//       },

//       error => {
//         // setIsLoaded(true);
//         // setError(error);
//       },
//     );
// }, []);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}

        <MainStackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
