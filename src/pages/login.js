import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import SocialButton from '../components/social-button';
import styles from './styles/login-style';

import Video from 'react-native-video';
import Auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';

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
          <Text style={styles.text}>Comic Universe</Text>
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
};

export default Login;
