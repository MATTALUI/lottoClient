import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Account extends React.Component {
  constructor(props){
    super(props);
    if(!props.user){
      props.switchState('Login');
    }
  }
  go = () =>{
    this.props.switchState('Menu');
  }
  render(){
    return (
      <View>
        <Text>Account!</Text>
        <Text>{this.thang}</Text>
        <Button onPress={this.go} title='Menu'/>
      </View>
    )
  }
}
