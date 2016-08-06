/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

class AwesomeProject extends Component {
  render() {
    return (

      <NavigatorIOS
      style={styles.container}
        initialRoute={{
          title: 'Github Notetaker',
          component: Main
        }}
      />

    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
