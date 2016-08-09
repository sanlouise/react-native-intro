import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#03a9f4',
    paddingBottom: 10,
    alignItems: 'center'
  },
  name: {
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
    color: 'white'
  },
  username: {
    fontSize: 16,
    color: 'white'
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 0,
    marginTop: 10
  }
});

class Badge extends React.Component{
  render(){
    return (
      <View style={styles.container}>
      <Image style={styles.image} source={{uri: this.props.userInfo.avatar_url}}/>
      <Text style={styles.name}> {this.props.userInfo.name} </Text>
      <Text style={styles.username}> {this.props.userInfo.login} </Text>
      </View>
    )
  }
};

Badge.propTypes = {
  userInfo: React.PropTypes.object.isRequired
};

module.exports = Badge;