import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {strings} from '../../assets/strings';
import {RootStackParamList} from '../../navigation/routes';
import {styles} from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'DetailsScreen'>;

export const DetailsScreen = ({route}: Props) => {
  const {director, actors, plot, posterUrl} = route.params;
  return (
    <View style={[styles.flexed]}>
      <ScrollView>
        <Image
          style={styles.poster}
          source={{
            uri: posterUrl,
          }}
        />

        <View style={[styles.flexed, styles.textDetailsContainer]}>
          <Text style={styles.directorText}>
            {strings.detailsScreen.director}: {director}
          </Text>

          <View style={styles.spacer} />
          <Text style={styles.actorsText}>
            {strings.detailsScreen.actors}: {actors}
          </Text>

          <View style={styles.spacer} />
          <Text>{plot}</Text>
        </View>
      </ScrollView>
    </View>
  );
};
