import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './navigation/mytab';
import {mystore} from './redux/store';

function App(){
  return (
    <Provider store={mystore}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}

export default App;



// https://5b5cb0546a725000148a67ab.mockapi.io/api/v1/users?page=1&limit=10