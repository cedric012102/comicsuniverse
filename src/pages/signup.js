import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  Linking,
} from 'react-native';
import Auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormInput from '../components/form-input';
import FormButton from '../components/form-button';
import styles from './styles/signup-screen-style';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Create An Account</Text>
        <FormInput
          labelValue={email}
          onChangeText={userEmail => setEmail(userEmail)}
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={password}
          onChangeText={userPassword => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <FormInput
          labelValue={confirmPassword}
          onChangeText={userPassword => setConfirmPassword(userPassword)}
          placeholderText="Confirm Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <FormButton
          buttonTitle="Sign Up"
          onPress={onRegisterEmailPasswordPress}
        />

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navButtonText}>Have an account? Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  async function onRegisterEmailPasswordPress() {
    try {
      await Auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          //Once the user creation has happened successfully, we can add the currentUser into firestore
          //with the appropriate details.
          firestore()
            .collection('users')
            .doc(Auth().currentUser.uid)
            .set({
              email: email,
              createdAt: firestore.Timestamp.fromDate(new Date()),
            })
            //ensure we catch any errors at this stage to advise us if something does go wrong
            .catch(error => {
              console.log(
                'Something went wrong with added user to firestore: ',
                error,
              );
            });
          navigation.navigate('Comics');
        })
        //we need to catch the whole sign up process if it fails too.
        .catch(error => {
          console.log('Something went wrong with sign up: ', error);
          Alert.alert(
            'The email address is already in use by another account.',
          );
        });
    } catch (e) {
      console.log(e);
    }
  }
};

export default SignupScreen;
