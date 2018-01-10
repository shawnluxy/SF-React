import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Button extends Component {
  render(){
    return (
      <TouchableOpacity style={style.button} onPress={this.props.onPress}>
        <Text style={style.buttonText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
  button:{
    border: 1 solid '#EFBD1B',
    background-color: '#EFBD1B',
    top: 6,
    margin-bottom: 0,
    margin-top: 0,
    padding: 5 0,
    position: 'relative',
    display: 'block',
    width: 100%,
    cursor: 'pointer',
    text-align: 'center'
  },
  buttonText:{
    font-size: 16,
    font-weight: 400,
    color: '#fff'
  }
});
