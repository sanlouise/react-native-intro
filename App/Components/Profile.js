import React from 'react';
import Badge from './Badge';

import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    rowContainer: {
        padding: 10
    },
    rowTitle: {
        color: '#48BBEC',
        fontSize: 16
    },
    rowContent: {
        fontSize: 19
    }
});

class Profile extends React.Component{

	//Method to update public_repos to public repos, and all items in topicArr should have first letter upperCase
	getRowTitle(user, item){
		item = (item === 'public_repos') ? item.replace('_') : item;
		return item[0] ? item[0].toUpperCase + item.slice(1) : item;
	}

	render() {

		const userInfo = this.props.userInfo;
		const topicArr = ['company', 'location', 'email', 'bio', 'followers', 'following', 'public_repos'];
		
		let list = topicArr.map((item, index) => {
			if(!userInfo[item]){
				return <View key={index} />
			} else {
				return {
					<View key={index}>
						<View styles={styles.rowContainer}>
							<Text styles.rowTitle}> {this.getRowTitle(userInfo, item)} </Text>
							<Text style={styles.rowContent}> {userInfo[item]} </Text>
						</View>
					</View>
				}
			}
		});

		<ScrollView style={styles.container}>
			<Badge userInfo={this.props.userInfo} />
			{list}
		</ScrollView
	}
};

module.exports = Profile;