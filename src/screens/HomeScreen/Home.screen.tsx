import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {fetchMovies} from '../../apis/movies';
import {Card} from '../../components/Card/Card';
import {Carousel} from '../../components/Carousel/Carousel';
import {RootStackParamList} from '../../navigation/routes';
import {MovieCarouselData} from '../../types/movies';
import {styles} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

export const HomeScreen = () => {
  const [moviesCarousels, setMoviesCarousels] = useState<MovieCarouselData>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchMovies
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
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
    <View style={styles.screen}>
      {isLoaded && (
        <ScrollView>
          {moviesCarousels?.carousels.map(carousel => {
            const {title, items} = carousel;
            return (
              <Carousel
                key={title}
                title={title}
                data={items}
                style={styles.section}
                renderItem={item => {
                  const {id, posterUrl, title, director, actors, plot} = item;
                  return (
                    <Card
                      key={id}
                      imageSrc={posterUrl}
                      title={title}
                      onPress={() =>
                        navigation.navigate('DetailsScreen', {
                          movieId: id,
                          title,
                          posterUrl,
                          director,
                          actors,
                          plot,
                        })
                      }
                    />
                  );
                }}
              />
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};
