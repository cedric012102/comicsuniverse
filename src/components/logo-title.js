import React from 'react';
import {Image, View, Text, TouchableWithoutFeedback} from 'react-native';
import {styles} from './styles/logo-title-style';
import {useNavigation} from '@react-navigation/native';

export function LogoTitle({children}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('home')}>
        <Image
          style={styles.img}
          source={require('../assets/images/comics.jpg')}
        />
      </TouchableWithoutFeedback>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}
