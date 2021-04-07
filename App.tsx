import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
import CountScreen from './src/screens/CountScreen';
import { DimensionsScreen } from './src/screens/DimensionsScreen';
import HelloScreen from './src/screens/HelloScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HelloScreen/>
      <CountScreen /> */}
      {/* <BoxObjectModelScreen/> */}
      <DimensionsScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex:1
    }
});

export default App;
