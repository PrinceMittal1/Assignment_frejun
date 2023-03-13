import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/FirstTab';
import SortingAndSearching from '../components/SecondTab';
import Thirdtab from '../components/ThirdTab';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const MyTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'first_tab') {
            return (
              <Ionicons name={'ios-home-sharp'} size={size} color={color} />
            );
          } else if (route.name === 'second_tab') {
            return <FontAwesome name={'edit'} size={size} color={color} />;
          } else if (route.name === 'third_tab') {
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
      <Tab.Screen name="first_tab" component={Home} />
      <Tab.Screen name="second_tab" component={SortingAndSearching} />
      <Tab.Screen name="third_tab" component={Thirdtab} />
    </Tab.Navigator>
  );
};

export default MyTabs;
