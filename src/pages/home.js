import React, {useState, useCallback} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

// query helper with built in cache
import {useQuery} from 'react-query';

import {HomeCard} from '../components/home-card';

// utility functions to query API
import {generateSixRandom, searchHero} from '../config/api-key';

import Icon from 'react-native-vector-icons/Feather';

import {styles} from './styles/home-style';

export function Home({navigation}) {
  const [superHeroName, setSuperHeroName] = useState('');
  const [superHeroData, setSuperHeroData] = useState([]);
  const [superHeroFetchError, setSuperHeroFetchError] = useState('');

  const [isReFetching, setIsReFetching] = useState(false);

  // fetch 6 random superheroes to populate the landing page
  const {
    status: superHeroesStatus,
    data: superHeroesData,
    isFetching: isFetchingSuperHeroes,
    refetch,
  } = useQuery('superHeroes', async () => {
    const fetchData = await generateSixRandom();
    return fetchData;
  });

  // refetch on pull down
  const invalidateAndRefetch = () => {
    setIsReFetching(true);
    setSuperHeroData([]);
    setSuperHeroFetchError('');
    refetch().then(() => setIsReFetching(false));
  };

  // search one hero by name
  async function searchByName(name) {
    setIsReFetching(true);
    await searchHero(name).then(fetchData => {
      if (fetchData.response === 'success') {
        setSuperHeroFetchError('');
        if (fetchData.results.length > 6) {
          let trimmedData = fetchData.results.filter(
            (_, index) => !(index > 5),
          );
          createButtonAlert();
          setSuperHeroData(trimmedData);
          setIsReFetching(false);
          // dismiss keyboard
          Keyboard.dismiss();
          return;
        }
        setSuperHeroData(fetchData.results);
        setIsReFetching(false);
        // dismiss keyboard
        Keyboard.dismiss();
        return;
      }
      setSuperHeroFetchError(fetchData.error);
      setIsReFetching(false);
      return;
    });
    setIsReFetching(false);
    return;
  }

  // programmatically toggle-able alert
  const createButtonAlert = () =>
    Alert.alert(
      'Warning!',
      'The result set for this query is too large. Please enter a narrowed down search term. Showing only the first 6',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );

  // programmatically navigate to profile page
  const navigateToProfile = superHero =>
    navigation.navigate('Profile', {
      hero: superHero,
    });

  const clearSearch = useCallback(() => {
    setSuperHeroName('');
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.TextInputContainer}>
            <TextInput
              placeholder="Find Your Character!"
              placeholderTextColor={'#282828' ? 'grey' : '#CCC'}
              autoCorrect={false}
              onChangeText={text => setSuperHeroName(text)}
              value={superHeroName}
              maxLength={40}
              multiline
            />
            {!!superHeroName && (
              <Icon name="x" color="#880018" size={15} onPress={clearSearch} />
            )}
          </View>

          <View style={styles.searchButtonContainer}>
            {/* Button */}
            <TouchableOpacity
              style={styles.searchButton}
              onPress={() => {
                searchByName(superHeroName);
              }}>
              <Icon
                name="search"
                size={24}
                color="#2e64e5"
                style={styles.searchButtonText}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* 2 */}
        <View style={styles.mainContainer}>
          <View style={styles.cardHolderContainer}>
            <ScrollView
              contentContainerStyle={styles.scrollView}
              // handle page refresh (refetch on pull down)
              refreshControl={
                <RefreshControl
                  refreshing={isReFetching}
                  onRefresh={invalidateAndRefetch}
                />
              }>
              {!isFetchingSuperHeroes ? (
                // there was an error fetching
                superHeroFetchError ? (
                  <Text>{superHeroFetchError}</Text>
                ) : superHeroData.length > 0 ? (
                  // map found superheroes
                  superHeroData.map((aSuperHero, cardIndex) => (
                    //  card
                    <View style={styles.cardHolder} key={cardIndex}>
                      <HomeCard
                        SuperHero={aSuperHero}
                        navigateToProfile={() => navigateToProfile(aSuperHero)}
                      />
                    </View>
                  ))
                ) : superHeroesStatus === 'success' ? (
                  // map random superheroes
                  superHeroesData.map((aSuperHero, cardIndex) => (
                    //  card
                    <View style={styles.cardHolder} key={cardIndex}>
                      <HomeCard
                        SuperHero={aSuperHero}
                        navigateToProfile={() => navigateToProfile(aSuperHero)}
                      />
                    </View>
                  ))
                ) : (
                  <Text>There was an error fetching. Pull down to refresh</Text>
                )
              ) : (
                !isReFetching && (
                  <ActivityIndicator size="large" color="#0000ff" />
                )
              )}
            </ScrollView>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
