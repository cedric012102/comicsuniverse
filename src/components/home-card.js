import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {styles} from './styles/home-card-style';

export function HomeCard({SuperHero = {}, navigateToProfile = () => {}}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigateToProfile();
      }}>
      <Image
        source={
          SuperHero?.image?.url
            ? {
                uri: SuperHero.image.url,
              }
            : require('../assets/images/superhero.png')
        }
        style={styles.img}
      />
      <View style={styles.textHolder}>
        <Text style={styles.heading}>{SuperHero.name}</Text>
        <Text style={styles.alignmentText(SuperHero.biography.alignment)}>
          {SuperHero.biography.alignment}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
