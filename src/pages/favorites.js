import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './styles/favorites-style';
import firestore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';
import {HomeCard} from '../components/home-card';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Favorites = ({item, navigation}) => {
  const [favorites, setFavorites] = useState([]); //will be an empty array

  const handleDelete = character => {
    Alert.alert(
      'Remove Character From Favorites',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed!'),
          style: 'cancel',
        },
        {
          text: 'Confirm',
          onPress: () => deletePost(character),
        },
      ],
      {cancelable: false},
    );
  };

  const deletePost = character => {
    console.log('Current Post Id: ', character);

    firestore()
      .collection('favorites')
      .doc(character.id)

      .delete()
      .then(() => {
        console.log('Character deleted!');
      })
      .catch(e => {
        console.log('Error while deleting the image. ', e);
      });
  };

  useEffect(onSyncFavorites, []);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(_, index) => index}
        data={favorites}
        renderItem={({item}) => (
          <View style={styles.cardHolder}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile', {hero: item.hero})}>
              <Text style={styles.favoriteCharacterText}>{item.hero.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(item.hero)}>
              <Text style={styles.icon}>X</Text>
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );

  function onSyncFavorites() {
    const unsubscribe = firestore()
      .collection('favorites')
      .where('userId', '==', Auth().currentUser.uid)
      .onSnapshot({
        next: collection => {
          const collectionDocuments = collection.docs.map(item => item.data());
          setFavorites(collectionDocuments);
        },
      });

    return unsubscribe;
  }
};

export default Favorites;
