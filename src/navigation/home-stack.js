import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../pages/home';
import {Profile} from '../pages/profile';
import AppInfo from '../pages/app-info';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="HomeScreen"
        options={{headerShown: false, headerLeft: null}}
      />
      <Stack.Screen
        component={Profile}
        name="Profile"
        options={{
          headerTitle: 'Character Profile',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
