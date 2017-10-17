
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ToolbarAndroid,
  AsyncStorage
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
      route: 'Menu',
      user: null
    };
  }
  componentWillMount = async ()=>{
    // await AsyncStorage.removeItem('userToken');
    // await AsyncStorage.setItem('userToken', 'user token. meow!');
    let user = await AsyncStorage.getItem('userToken');
    this.setState({user});

  }
  login = async (creds)=>{
    let token = await AsyncStorage.getItem('userToken');
    let call = await fetch('http://192.168.1.75:8000/login',{
      method: 'Post',
      body: JSON.stringify(creds),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    });
    let response = await call.json();
    console.log(response);
    if(response.error){
      return response;
    }else{
      await AsyncStorage.setItem('userToken', response.token);
      this.setState({user:response.token});
      return response;
    }
  }
  logout = async ()=>{
    await AsyncStorage.removeItem('userToken');
    this.setState({user:null});
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
        route = (<Menu switchState={this.switchState} user={this.state.user} logout={this.logout}/>);
        break;
      case 'WinningNumbers':
        route = (<WinningNumbers switchState={this.switchState} user={this.state.user}/>);
        break;
      case 'Account':
        route = (<Account switchState={this.switchState} user={this.state.user}/>);
        break;
      case 'MyNumbers':
        route = (<MyNumbers switchState={this.switchState} user={this.state.user}/>);
        break;
      case 'Login':
        route = (<Login switchState={this.switchState} user={this.state.user}  login={this.login}/>);
        break;
      case 'New':
        route = (<New switchState={this.switchState} user={this.state.user}/>);
        break;
      case 'Test':
        route = (<Test switchState={this.switchState} user={this.state.user}/>);
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
