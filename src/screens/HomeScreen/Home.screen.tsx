import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Button, ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fetchMovies} from '../../apis/movies';
import {Card} from '../../components/Card/Card';
import {Carousel} from '../../components/Carousel/Carousel';
import {RootStackParamList} from '../../navigation/routes';
import {MovieCarousel, MovieCarouselData} from '../../types/movies';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export const HomeScreen = () => {
  // TODO: Use this is the screen

  const [moviesCarousels, setMoviesCarousels] = useState<MovieCarouselData>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchMovies
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          console.log('+++ result', result);
          setMoviesCarousels(result);
        },
        error => {
          setIsLoaded(true);
          //   setError(error);
        },
      );
  }, []);

  const navigation = useNavigation<Props['navigation']>();

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {isLoaded && (
        <ScrollView>
          {moviesCarousels?.carousels.map(carousel => {
            const {title, items} = carousel;
            return (
              <Carousel
                key={title}
                title={title}
                data={items}
                renderItem={item => <Card imageSrc="" title={item.title} />}
              />
            );
          })}
          <Button
            title="Go to Details Screen"
            onPress={() =>
              navigation.navigate('DetailsScreen', {movieId: '86,'})
            }
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
