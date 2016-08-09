import React, { Component } from 'react';
import Main from './App/Components/Main';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#039BE5'
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
