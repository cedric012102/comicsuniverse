import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeBottomTabNavigator from './home-bottom-tab-navigator';
import Login from '../pages/login';
import Favorites from '../pages/favorites';
import AppInfo from '../pages/app-info';
import Terms from '../pages/terms';
import PrivacyPolicy from '../pages/privacy-policy';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
          title: 'Comic Amani',
          headerTintColor: 'black',
          headerStyle: {
            backgroundColor: 'rgb(221, 244, 244)',
          },
        }}>
        <Stack.Screen
          name="Comics"
          component={HomeBottomTabNavigator}
          options={{
            title: 'Comic Amani',
            headerTitle: props => <LogoTitle {...props} />,
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Comic Amani',
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
        <Stack.Screen
          name="Terms"
          component={Terms}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,
            },
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <FontAwesome.Button
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Privacy"
          component={PrivacyPolicy}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,
            },
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <FontAwesome.Button
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
