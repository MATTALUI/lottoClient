import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

export default class Menu extends React.Component {
  go = (newRoute)=>{
    this.props.switchState(newRoute);
  }
  render(){
    return (
      <View>
        <Text style={styles.title}>Main Menu</Text>
        <TouchableOpacity onPress={()=>{this.go('WinningNumbers')}} style={styles.menuButton}>
          <Text style={styles.buttonText}>View Winning Numbers</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{this.go('Test')}} style={styles.menuButton}>
          <Text style={styles.buttonText}>Test</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 69
  },
  btnSpace: {
    marginTop: 40,
    marginBottom: 40,
    width: 20
  },
  menuButton: {
    backgroundColor: '#5880e8',
    width: '85%',
    height: 50,
    marginTop: 4,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 65,
    elevation: 1,
    borderWidth: 3,
    borderColor: '#BFEFFF'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23,
    marginTop: 5
  }
});
