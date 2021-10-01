import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeBottomTabNavigator from './home-bottom-tab-navigator';
import Login from '../pages/login';
import Favorites from '../pages/favorites';
import AppInfo from '../pages/app-info';

import {LogoTitle} from '../components/logo-title';
import Auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

const Router = () => {
  const user = Auth().currentUser;
  const isLoggedIn = user !== null;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? 'Comics' : 'Login'}
        screenOptions={{
          title: 'Comics Universe',
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: 'rgb(221, 244, 244)',
          },
        }}>
        <Stack.Screen
          name="Comics"
          component={HomeBottomTabNavigator}
          options={{
            title: 'Comic Universe',
            headerTitle: props => <LogoTitle {...props} />,
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Comic Universe',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{headerLeft: null}}
        />
        <Stack.Screen
          name="Info"
          component={AppInfo}
          options={{headerLeft: null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
