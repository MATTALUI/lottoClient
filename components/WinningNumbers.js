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
        <Text style={[styles.number, styles.date]}>{this.state.date.complete}</Text>
        <Text style={[styles.number, styles.category]}>
          特別獎
        </Text>
        <Text style={[styles.number]}>
          {this.state.grandPrize}
        </Text>
        <Text style={[styles.number,styles.category]}>
          特獎
        </Text>
        <Text style={[styles.number]}>
          {this.state.secondGrandPrize}
        </Text>
        <Text style={[styles.number, styles.category]}>
          頭獎
        </Text>
            {this.state.firstPrize.map((number,index)=>(<Text style={styles.number} key={index}>{number}</Text>))}
        <Text style={[styles.number, styles.category]}>
          增開六獎
        </Text>
          {this.state.getThree.map((number,index)=>(<Text style={styles.number} key={index}>{number}</Text>))}
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
    color: '#FFCC00',
    fontWeight: 'bold',
    fontSize: 30
  },
  category: {
    fontSize: 25,
    color: 'azure'
  },
  date: {
    backgroundColor: '#FFCC00',
    color: '#111111'
  },
  imageContainer: {
    width: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 150
  }
});
