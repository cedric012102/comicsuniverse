import React from 'react';
import {Image, View, Text} from 'react-native';
import {styles} from './styles/logo-title-style';

export function LogoTitle({children, navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../assets/images/comics.jpg')}
      />
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}
