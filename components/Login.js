import React from 'react';
import {View, Text, Button} from 'react-native';

export default class Login extends React.Component {
  go = () =>{
    this.props.switchState('Menu');
  }
  render(){
    return (
      <View>
        <Text>Login!</Text>
        <Button onPress={this.go} title='Menu'/>
      </View>
    )
  }
}
