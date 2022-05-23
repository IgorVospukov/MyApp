import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Foto from './Foto';
import Home from './Home';
import Other from './Other';
import type {HomeTabParamList} from '../Types/types';

const Tab = createBottomTabNavigator<HomeTabParamList>();
const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return (
                <Icon
                  name="home"
                  size={size}
                  color={focused ? color : 'grey'}
                />
              );
            } else if (route.name === 'Foto') {
              return (
                <Icon
                  name="camera"
                  size={size}
                  color={focused ? color : 'grey'}
                />
              );
            } else if (route.name === 'Other') {
              return (
                <Icon
                  name="heart"
                  size={size}
                  color={focused ? color : 'grey'}
                />
              );
            }
          },
          tabBarInactiveTintColor: 'grey',
          tabBarActiveTintColor: 'tomato',
          headerShown: false,
        })}>
        <Tab.Screen name="Foto" component={Foto} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Other" component={Other} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
