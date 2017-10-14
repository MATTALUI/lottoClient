import React from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';


export default class WinningNumbers extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      grandPrize: 0,
      secondGrandPrize: 0,
      firstPrize: 0,
      getThree: 0,
      date: {complete: null},
      madeCall: false
    };
  }

  componentDidMount = async ()=>{
    let call = await fetch('http://192.168.1.75:8000/winning-numbers');
    let response = await call.json();
    response.madeCall = true;
    this.setState(response);
  }
  go = ()=>{
    this.props.switchState('Menu');
  }

  render() {
    if(!this.state.madeCall){
      return (
        <View>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/loading.gif')} style={{width:100, height: 100}} />
          </View>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text style={styles.number}>{this.state.date.complete}</Text>
        <Text style={styles.number}>
          GRAND PRIZE: {this.state.grandPrize}
        </Text>
        <Text style={styles.number}>
          SECOND GRAND PRIZE: {this.state.secondGrandPrize}
        </Text>
        <Text style={styles.number}>
          FIRST PRIZE: {this.state.firstPrize}
        </Text>
        <Text style={styles.number}>
          GET THREE: {this.state.grandPrize}
        </Text>
        <Button onPress={this.go} title='Back to Menu'/>
      </View>
    );
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
