import React from 'react';
import api from '../Utils/api';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

class Dashboard extends React.Component{
render(){
  return (
      <View style={styles.container}>
      	<Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
        <Text> This is the dashboard </Text>
        <Text> {JSON.stringify(this.props.userInfo)} </Text>
      </View>
    )
}
};

module.exports = Dashboard;