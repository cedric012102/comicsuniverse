import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity, Alert} from 'react-native';
import {styles} from './styles/logout-button-style';
import {StackActions, useNavigation} from '@react-navigation/native';
import Auth from '@react-native-firebase/auth';

export function LogoutButton() {
  const navigation = useNavigation();

  const logoutAlert = () =>
    Alert.alert('Logout!', 'Are You Sure You Want To Logout?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Logout', onPress: () => onLogout()},
    ]);

  return (
    <TouchableOpacity onPress={logoutAlert} style={styles.containerStyle}>
      <AntDesign name="logout" size={24} color={'black'} />
    </TouchableOpacity>
  );

  function onLogout() {
    //Logout functionality here
    Auth().signOut();
    navigation.dispatch(StackActions.replace('Login'));
  }
}
