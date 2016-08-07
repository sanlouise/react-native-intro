import React from 'react';
import Badge from './Badge';
import Separator from './Helpers/Separator';

import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

var {
    ScrollView,
    Text,
    View,
    TouchableHighlight,
    StyleSheet
    } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowContainer: {
        flexDirection: 'column',
        flex: 1,
        padding: 10
    },
    name: {
        color: '#48BBEC',
        fontSize: 18,
        paddingBottom: 5
    },
    stars: {
        color: '#48BBEC',
        fontSize: 14,
        paddingBottom: 5
    },
    description: {
        fontSize: 14,
        paddingBottom: 5
    }
});

class Repositories extends React.Component{
	render() {
		let repos = this.props.repos;
		let list = repos.map((item, index) => {
			let desc = repos[index].description ? <Text style={styles.description}> {repos[index.description]} </Text> : <View />;
			return(
				<View key={index}>
					<View style={styles.rowContainer}>

					<TouchableHighlight
						onPress={}
						underlayColor='transparent'>
						<Text style={styles.name}>{repos[index].name}</Text>
					</TouchableHighlight>

					<Text style={styles.stars}> Stars: {repos[index].stargazers_count} </Text>
						{desc}
					</View>
					<Separator />
				</View>
				)
		})
		return (
			<ScrollView style={styles.container}>
				<Badge userInfo={this.props.userInfo} />
				{list}
			</ScrollView>

		)
	}
};

module.exports = Repositories;