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

        <TouchableOpacity onPress={()=>{this.go('New')}} style={[styles.menuButton,styles.newButton]}>
          <Text style={[styles.buttonText,styles.new]}>Add Receipt</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{this.go('WinningNumbers')}} style={styles.menuButton}>
          <Text style={styles.buttonText}>View Winning Numbers</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{this.go('MyNumbers')}} style={styles.menuButton}>
          <Text style={styles.buttonText}>My Numbers</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{this.go('Account')}} style={styles.menuButton}>
          <Text style={styles.buttonText}>Account Settings</Text>
        </TouchableOpacity>

        {this.props.user?
          <TouchableOpacity onPress={this.props.logout} style={styles.menuButton}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={()=>{this.go('Login')}} style={styles.menuButton}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        }


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
    // backgroundColor: '#5880e8',
    backgroundColor: '#FFCC00',
    width: '85%',
    height: 50,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 65,
    elevation: 1,
    borderWidth: 3,
    borderColor: 'black'
  },
  buttonText: {
    textAlign: 'center',
    // color: 'white',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 23,
    marginTop: 5
  },
  new: {
    color: 'white'
  },
  newButton: {
    backgroundColor: 'red'
  }
});
