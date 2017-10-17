import React from 'react';
import {View, Text, Button, TextInput, StyleSheet, AsyncStorage} from 'react-native';

export default class Login extends React.Component {
  constructor (props){
    super(props);
    this.state={
      username: 'USERNAME',
      password: 'PASSWORD',
      showPassword: false,
      storage: null
    }
  }
  go = () =>{
    this.props.switchState('Menu');
  }
  login =()=>{
    let creds = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.login(creds);
  }
  updateUsername = (text)=>{
    this.setState({username: text});
  }
  updatePassword = (text)=>{
    this.setState({password: text});
  }

  render(){
    return (
      <View>
        <Text style={[styles.text,styles.big]}>Login</Text>

        <TextInput
        style={[styles.text]}
        placeholder={'USERNAME'}
        onChangeText={this.updateUsername}
        autoCorrect={false}
        placeholderTextColor={'white'}/>

        <TextInput
        style={[styles.text]}
        autoCorrect={false}
        placeholder={'PASSWORD'}
        onChangeText={this.updatePassword} secureTextEntry={!this.state.showPassword}
        placeholderTextColor={'white'}/>

        <Button onPress={this.login} title="LOG IN"/>
        <Button onPress={this.go} title='Menu'/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text:{
    color: 'white',
    textAlign: 'center'
  },
  big: {
    fontSize: 50
  }
});
