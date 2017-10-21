import React from 'react';
import {View, Text, Button, ScrollView, AsyncStorage} from 'react-native';

export default class MyNumbers extends React.Component {
  constructor(props){
    super(props);
    if(!props.user){
      props.switchState('Login');
    }
    let array = [];
    for (let i = 0; i<100; i++){
      array.push(i);
    }
    this.state = {
      array,
      myReceipts: []
    }
  }
  componentWillMount = async ()=>{
    let user = await AsyncStorage.getItem('userToken');
    console.log(user);
    let request = await fetch('http://192.168.1.75:8000/receipts',{
      method: 'GET',
      headers: {
        'authorization': user
      }
    });
    console.log(request);
    let response = await request.json();
    console.log(response);
    this.setState({myReceipts: response});

  }
  go = () =>{
    this.props.switchState('Menu');
  }
  render(){
    return (
      <View>
      <Button onPress={this.go} title='Menu'/>
        <ScrollView>
          <Text>MyNumbers!</Text>
          {this.state.myReceipts.map((receipt, index)=>(<Text key={index}>{receipt.receipt_number}</Text>))}
        </ScrollView>
      </View>
    )
  }
}
