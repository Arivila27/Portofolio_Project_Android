

import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import { css } from './src/assets/css/cssku';
import {Provider} from 'react-redux'
import {storeState} from './src/redux'
import 'react-native-gesture-handler';
import Router from './src/router/router';
import { myColor } from './src/assets/color';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {

  return (
    <Provider store={storeState}>
      <Router></Router>
    </Provider>

  );
};

function HomeScreen() {
  return (
    <View style={{backgroundColor:myColor.warna1, height:'100%',alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tombolku: {
    width:10,
    height:20
  },
});

export default App;
