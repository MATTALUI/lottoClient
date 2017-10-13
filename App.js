
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';
import WinningNumbers from './components/WinningNumbers.js';
import Test from './components/Test.js';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor (props) {
    super(props);
    this.state = {
      route: 'menu'
    };
  }
  toggleWinning=()=>{
    this.setState({showWinning: !this.state.showWinning});
  }
  switchState = (newRoute) =>{
    this.setState({route: newRoute});
  }
  render(){
    let route;
    switch (this.state.route) {
      case 'menu':
        route = (<WinningNumbers switchState={this.switchState}/>);
        break;
      case 'test':
        route = (<Test switchState={this.switchState}/>);
        break;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>LOTTO.</Text>
        {route}
      </View>
    )
  }
}
// color="#A8C9FF"
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
