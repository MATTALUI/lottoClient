
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import WinningNumbers from './components/WinningNumbers.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Lotto.</Text>
        <WinningNumbers/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21447c',
  },
  welcome: {
    fontSize: 33,
    textAlign: 'center',
    color: '#F0F0F0'
  },
  number: {
    textAlign: 'center',
    color: '#ffffff'
  },
  imageContainer: {
    width: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 150
  }
});
