import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/FirstTab';
import SortingAndSearching from '../components/SecondTab';
import Thirdtab from '../components/ThirdTab';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return (
              <Ionicons name={'ios-home-sharp'} size={size} color={color} />
            );
          } else if (route.name === 'SortSearch') {
            return <FontAwesome name={'edit'} size={size} color={color} />;
          } else if (route.name === 'Android') {
            return <FontAwesome name={'edit'} size={size} color={color} />;
          }
        },

        tabBarActiveTintColor: '#1D3932',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingVertical: 5,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: 'white',
          position: 'absolute',
          height: 50,
        },

        tabBarLabelStyle: {paddingBottom: 3},
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="SortSearch" component={SortingAndSearching} />
      <Tab.Screen name="Android" component={Thirdtab} />
    </Tab.Navigator>
  );
};

export default MyTabs;
