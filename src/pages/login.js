import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import SocialButton from '../components/social-button';
import styles from './styles/login-style';

import Video from 'react-native-video';
import Auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {Firestore} from '@firebase/firestore';
import uuid from 'react-native-uuid';
import {
  AppleButton,
  appleAuth,
} from '@invertase/react-native-apple-authentication';

const Login = ({navigation}) => {
  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  return (
    <ScrollView
      scrollEnabled={false}
      alwaysBounceHorizontal={false}
      alwaysBounceVertical={false}
      bounces={false}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View style={styles.container}>
          <Video
            source={require('../assets/images/fire.mp4')}
            style={styles.video}
            onError={(e: LoadError) => console.log(e)}
            resizeMode={'cover'}
            repeat={true}
            paused={paused}
          />
          <Image
            source={require('../assets/images/comics.jpg')}
            style={styles.logo}
          />
          <Text style={styles.text}>Comic Amani</Text>
          {/* <FormInput
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

        <FormButton
          buttonTitle="Sign In"
          onPress={() => login(email, password)}
        />

        <TouchableOpacity style={styles.forgotButton} onPress={() => reset()}>
          <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity> */}

          <SocialButton
            buttonTitle="Sign In With Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={onFacebookButtonPress}
          />

          <SocialButton
            buttonTitle="Sign In With Google"
            btnType="google"
            color="#468C98"
            backgroundColor="#CFFFE5"
            onPress={onGoogleButtonPress}
          />

          <AppleButton
            buttonStyle={AppleButton.Style.WHITE}
            buttonType={AppleButton.Type.SIGN_IN}
            style={{
              width: 160,
              height: 45,
              marginTop: 25,
            }}
            onPress={() =>
              onAppleButtonPress().then(() =>
                console.log('Apple sign-in complete!'),
              )
            }
          />

          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing in, you confirm that you accept the
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
              <Text style={[styles.color_textPrivate, {color: '#fff'}]}>
                Terms of Service
              </Text>
            </TouchableOpacity>
            <Text style={styles.color_textPrivate}> and</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Privacy')}>
              <Text style={[styles.color_textPrivate, {color: '#fff'}]}>
                Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );

  async function onGoogleButtonPress() {
    try {
      const userInfo = await GoogleSignin.signIn();
      const idToken = userInfo.idToken;
      // Create a Google credential with the token
      const googleCredential = Auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential into Firebase (Auth() is Firebase)
      await Auth().signInWithCredential(googleCredential);
      //  await Firestore().collection('users').doc(idToken).set({userId: idToken})
      navigation.navigate('Comics');
    } catch (e) {
      if (e.code !== statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert(
          'Google Login Failure',
          'Google authentication has failed. If this persists, contact us',
          [{text: 'Close', style: 'destructive'}],
        );
      }
    }
    // await Firestore().collection('users').doc(uid).set({userId: uid})
  }

  async function onFacebookButtonPress() {
    try {
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = Auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      // Sign-in the user with the credential
      await Auth().signInWithCredential(facebookCredential);

      navigation.navigate('Comics');
    } catch (error) {
      console.log({error});
    }
  }

  async function onAppleButtonPress() {
    try {
      // Start the sign-in request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      // Ensure Apple returned a user identityToken
      if (!appleAuthRequestResponse.identityToken) {
        throw 'Apple Sign-In failed - no identify token returned';
      }

      // Create a Firebase credential from the response
      const {identityToken, nonce} = appleAuthRequestResponse;
      const appleCredential = Auth.AppleAuthProvider.credential(
        identityToken,
        nonce,
      );

      // Sign the user in with the credential
      await Auth().signInWithCredential(appleCredential);

      navigation.navigate('Comics');
    } catch (error) {
      console.log({error});
    }
  }
};

export default Login;
