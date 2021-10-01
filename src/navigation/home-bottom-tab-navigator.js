import React, {useEffect, useState} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AppInfo from '../pages/app-info';
import Favorites from '../pages/favorites';
import HomeStack from './home-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { LogoutButton } from '../components/logout-button';

const Tab = createMaterialBottomTabNavigator();

const HomeBottomTabNavigator = ({navigation}) => {
  const [title, setTitle] = useState('Comics');
  useEffect(() => {
    navigation.setOptions({
      headerLeft: null,
      headerRight: () => <LogoutButton />,
    });
  }, [title]);

  return (
    <Tab.Navigator>
      <Tab.Screen
        component={HomeStack}
        name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'home-circle'}
              size={25}
              color={color}
            />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: event => {
            setTitle('Comics');
            event.preventDefault();
            navigation.navigate('home');
          },
        })}
      />
      <Tab.Screen
        component={Favorites}
        name="Favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({color}) => (
            <Fontisto name={'favorite'} size={25} color={color} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: event => {
            setTitle('Favorites');
            event.preventDefault();
            navigation.navigate('Favorites');
          },
        })}
      />
      <Tab.Screen
        component={AppInfo}
        name="Info"
        options={{
          title: 'Info',
          tabBarIcon: ({color}) => (
            <Ionicons name={'menu'} size={27} color={color} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: event => {
            setTitle('Info');
            event.preventDefault();
            navigation.navigate('Info');
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;
