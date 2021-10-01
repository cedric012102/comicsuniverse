import React from 'react';
import {Image, Linking} from 'react-native';

import {
  AppDescriptionText,
  Container,
  DevNameText,
  WebSiteLinkText,
} from '../styles/app-info-style';

import avengerLogo from '../../assets/images/blackpanther.png';

const AppInfo: React.FC = () => {
  return (
    <Container>
      <Image source={avengerLogo} style={{height: '50%', width: '35%'}}/>
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
