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
        <TouchableHighlight
        	onPress={this.goToProfile.bind(this)}
        	underlayColor='#88D4F5'>
        	<Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>

        <TouchableHighlight
        	onPress={this.goToRepos.bind(this)}
        	underlayColor='#88D4F5'>
        	<Text style={styles.buttonText}> View Repositories </Text>
        </TouchableHighlight>

        <TouchableHighlight
        	onPress={this.goToNotes.bind(this)}
        	underlayColor='#88D4F5'>
        	<Text style={styles.buttonText}> View Notes </Text>
        </TouchableHighlight>
      </View>
    )
}
};

module.exports = Dashboard;