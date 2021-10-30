import React from 'react';
import {Image, Linking, View} from 'react-native';

import {
  AppDescriptionText,
  Container,
  DevNameText,
  WebSiteLinkText,
  ProfileIcon,
} from '../styles/app-info-style';
import {styles} from '../styles/index-style';

import avengerLogo from '../../assets/images/blackpanther.png';

const AppInfo: React.FC = () => {
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
    </Container>
  );
};

export default AppInfo;
