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

	makeBackground(btn){
		var obj = {
			flexDirection: 'row',
			alignSelf: 'stretch',
			justifyContent: 'center',
			flex: 1
		}
		if(btn === 0){
			obj.backgroundColor = '#48BBEC';
		} else if (btn === 1){
			obj.backgroundColor = '#E77AAE';
		} else {
			obj.backgroundColor = '#758Bf4';
		}
		return obj;
	}

render(){
  return (
      <View style={styles.container}>
      	<Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image} />
        <TouchableHighlight
        	style={this.makeBackground(0)}
        	onPress={this.goToProfile.bind(this)}
        	<Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>

        <TouchableHighlight
        	style={this.makeBackground(1)}
        	onPress={this.goToRepos.bind(this)}
        	<Text style={styles.buttonText}> View Repositories </Text>
        </TouchableHighlight>

        <TouchableHighlight
        	style={this.makeBackground(2)}
        	onPress={this.goToNotes.bind(this)}
        	<Text style={styles.buttonText}> View Notes </Text>
        </TouchableHighlight>
      </View>
    )
}
};

module.exports = Dashboard;