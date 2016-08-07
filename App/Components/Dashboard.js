import React {Component} from 'react';
import { View } from 'react-native';

let {
	Text,
	StyleSheet
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

class Dashboard extends Component {
	render() {
		return{
			<View style={styles.container}>
				<Text> This is the Dashboard </Text>
				<Text> {JSON.stringify(this.props.userInfo)} </Text>
			</View>
		}
	}

};

module.exports = Dashboard;