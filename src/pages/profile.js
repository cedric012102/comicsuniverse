import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles/profile-style';
import Auth from '@react-native-firebase/auth';
import Firestore from '@react-native-firebase/firestore';

export function Profile({route, navigation}) {
  // de-structure hero
  const {hero} = route.params;

  // returns sentence case
  const capitalizeFirstLetter = sentence =>
    sentence.charAt(0).toUpperCase() + sentence.slice(1);

  return (
    // switch header color by alignment
    <View style={styles.container(hero.biography.alignment)}>
      <View style={styles.topContainer}>
        <View style={styles.horizontalContainerA}>
          {/* show placeholder if image is not present */}
          <TouchableOpacity onPress={() => Linking.openURL(hero.image.url)}>
            <Image
              source={
                hero?.image?.url
                  ? {
                      uri: hero.image.url,
                    }
                  : require('../assets/images/superhero.png')
              }
              style={styles.img}
            />
          </TouchableOpacity>
          <View style={styles.Right}>
            {/* show "unknown if name is not given" */}
            <Text style={styles.RightHeader}>
              {hero.biography['full-name'] ? hero.biography['full-name'] : '-'}
            </Text>

            {/* flex table */}
            <View style={styles.Holder}>
              <View style={styles.Header}>
                <Text>Name</Text>
                <Text>Publisher</Text>
                <Text>Alignment</Text>
              </View>

              <View style={styles.Header}>
                <Text>:</Text>
                <Text>:</Text>
                <Text>:</Text>
              </View>

              <View style={styles.Header}>
                <Text>{hero.name !== 'null' ? hero.name : '-'}</Text>
                <Text>
                  {hero.biography.publisher !== 'null'
                    ? hero.biography.publisher
                    : '-'}
                </Text>
                <Text>
                  {hero.biography.alignment !== 'null'
                    ? capitalizeFirstLetter(hero.biography.alignment)
                    : '-'}
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* child 2 */}
        {/* show ? if subsequent detail is not present */}
        <View style={styles.horizontalContainerB}>
          <View>
            <Text style={styles.BText}>
              {hero.powerstats.intelligence !== 'null'
                ? hero.powerstats.intelligence
                : '-'}
            </Text>
            <Text style={styles.BTextHeader}>Intelligence</Text>
          </View>
          <View>
            <Text style={styles.BText}>
              {hero.powerstats.strength !== 'null'
                ? hero.powerstats.strength
                : '-'}
            </Text>
            <Text style={styles.BTextHeader}>Strength</Text>
          </View>
          <View>
            <Text style={styles.BText}>
              {hero.powerstats.speed !== 'null' ? hero.powerstats.speed : '-'}
            </Text>
            <Text style={styles.BTextHeader}>Speed</Text>
          </View>
        </View>
      </View>
      {/* bottom container */}
      <View style={styles.bottomContainer}>
        <View style={styles.bottomChild}>
          <ScrollView style={styles.bottomScrollView}>
            {/* card */}
            {Object.keys(hero).map((heroObjectKey, index) => {
              // copy hero object to avoid mutating origin
              let newHeroObject = {...hero};

              // re-assign the 'name' object key to an object
              // to map object rather than string later
              if (heroObjectKey === 'name') {
                newHeroObject[heroObjectKey] = {
                  name: newHeroObject[heroObjectKey],
                };
              }
              return (
                // don't map the 'response', and 'id' object keys
                // they are not needed and are strings not objects
                heroObjectKey !== 'response' &&
                heroObjectKey !== 'id' && (
                  <View style={styles.bottomCard} key={index}>
                    {/* card header */}
                    <Text style={styles.bottomHeader}>
                      {capitalizeFirstLetter(heroObjectKey)}
                    </Text>

                    {/* get key-value pairs from nested hero objects */}
                    {Object.entries(newHeroObject[heroObjectKey]).map(
                      ([key, entryValue], entriesIndex) => (
                        // flex table
                        <View
                          style={styles.bottomCardHolder}
                          key={entriesIndex}>
                          {/* left side */}
                          <View style={styles.Header}>
                            <Text>{`${capitalizeFirstLetter(key)}:`}</Text>
                          </View>

                          {/* right side */}
                          <View style={styles.Content}>
                            <Text>
                              {/* if the value is an array, map and separate */}
                              {entryValue && typeof entryValue === 'object'
                                ? entryValue.map(
                                    (values, entryValueIndex) =>
                                      `${values}${
                                        entryValueIndex < entryValue.length - 1
                                          ? ' / '
                                          : ''
                                      }`,
                                  )
                                : entryValue !== 'null'
                                ? entryValue
                                : '-'}
                            </Text>
                          </View>
                        </View>
                      ),
                    )}
                  </View>
                )
              );
            })}
            {Auth().currentUser.uid !== hero ? (
              <TouchableOpacity onPress={onFavoriteAdd}>
                <Text style={styles.addFavoritesText}>Add To Favorites</Text>
              </TouchableOpacity>
            ) : null}
          </ScrollView>
        </View>
      </View>
    </View>
  );

  async function onFavoriteAdd() {
    try {
      await Firestore().collection('favorites').add({
        hero: hero,
        userId: Auth().currentUser.uid,
      });
      navigation.navigate('Favorites');
    } catch (e) {
      console.log(e);
    }
  }
}
