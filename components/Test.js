import React from 'react';
import {View, Text, Button} from 'react-native';

export default class Test extends React.Component {
  go = () =>{
    this.props.switchState('Menu');
  }
  render(){
    return (
      <View>
        <Text>TEST!</Text>
        <Button onPress={this.go} title='Menu'/>
      </View>
    )
  }
}
