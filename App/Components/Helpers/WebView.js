import React from 'react';

import {
  View,
  WebView,
  StyleSheet
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column',
  },
});

class WebPage extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <WebView source={{uri: this.props.url}} />
      </View>
    );
  }
};

WebPage.propTypes = {
  url: React.PropTypes.string.isRequired
};

module.exports = WebPage;