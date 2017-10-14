
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ToolbarAndroid
} from 'react-native';
import WinningNumbers from './components/WinningNumbers.js';
import Test from './components/Test.js';
import Menu from './components/Menu.js';
import Account from './components/Account.js';
import Login from './components/Login.js';
import New from './components/New.js';
import MyNumbers from './components/MyNumbers.js';
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
      route: 'Menu'
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
      case 'Menu':
        route = (<Menu switchState={this.switchState}/>);
        break;
      case 'WinningNumbers':
        route = (<WinningNumbers switchState={this.switchState}/>);
        break;
      case 'Account':
        route = (<Account switchState={this.switchState}/>);
        break;
      case 'MyNumbers':
        route = (<MyNumbers switchState={this.switchState}/>);
        break;
      case 'Login':
        route = (<Login switchState={this.switchState}/>);
        break;
      case 'New':
        route = (<New switchState={this.switchState}/>);
        break;
      case 'Test':
        route = (<Test switchState={this.switchState}/>);
        break;
    }
    return (
      <View style={styles.container}>
        {this.state.route != 'Menu'?<View style={styles.nav}>
          <Text style={styles.welcome}>LOTTO.</Text>
        </View>:null}
        {route}
      </View>
    )
  }
}
// color="#A8C9FF"
const styles = StyleSheet.create({
  nav: {
    backgroundColor: '#102296',
    height: 50
  },
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
