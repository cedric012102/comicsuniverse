import React from 'react';
import {
  Image,
  Linking,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  AppDescriptionText,
  Container,
  DevNameText,
  WebSiteLinkText,
  ProfileIcon,
} from '../styles/app-info-style';
import {styles} from '../styles/index-style';

import Firestore from '@react-native-firebase/firestore';
import Auth from '@react-native-firebase/auth';

import avengerLogo from '../../assets/images/blackpanther.png';

const AppInfo: React.FC = ({navigation}) => {
  const deleteAccountAlert = () =>
    Alert.alert(
      'Delete Account',
      'Are You Sure You Want To Delete Your Account?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Delete', onPress: () => deleteUser()},
      ],
    );

  function deleteUser() {
    // console.log('Current Post Id: ', user);

    Firestore()
      .collection('users')
      .doc(Auth().currentUser.uid)

      .delete()
      .then(() => {
        console.log('User deleted!');
      })
      .catch(e => {
        console.log('Error while deleting the user. ', e);
      });
    navigation.navigate('Login');
  }

  return (
    <Container>
      <View style={styles.profileIcon}>
        <Image source={avengerLogo} style={styles.image} />
      </View>

      <DevNameText style={{color: 'blue'}}>Cedric Smith</DevNameText>
      <AppDescriptionText style={{color: 'red'}}>
        This app was developed using SuperHero API and React Native
      </AppDescriptionText>
      <WebSiteLinkText
        onPress={() => Linking.openURL('https://cedricb.breecks.com')}>
        https://cedricb.breecks.com
      </WebSiteLinkText>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={deleteAccountAlert}>
          <Text style={styles.deleteAccountText}>Delete Account</Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center'}}>
          Account will be completely deleted within 48 hours after request.
        </Text>
      </View>
    </Container>
  );
};

export default AppInfo;
