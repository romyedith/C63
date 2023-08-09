import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../components/Header';

export default class GoScreen extends React.Component{
  render(){
    return(
      <View>
      <Header/>
      <Text style = {styles.text}>
      Felicidades..!!
      Lo depuraste..
      </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text:{
    fontWeight: 'bold',
    marginTop: 200,
    color: 'black',
    fontSize: 25,
  }
})