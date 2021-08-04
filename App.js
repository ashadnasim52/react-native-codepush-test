import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CodePush from 'react-native-code-push';
const codePusoption = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
};
const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Updated with code Push</Text>
      <Text>App</Text>
    </View>
  );
};

export default CodePush(codePusoption)(App);

const styles = StyleSheet.create({});
