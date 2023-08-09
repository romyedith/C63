import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../components/Header';

export default class HomeScreen extends React.Component{
  nextScreen =()=>{
    this.props.navigation.navigate('GoScreen');
  }

  render(){
    return(
      <View style = {styles.container}>
      <Header/>
        <Text style = {styles.displayText}>
        La depuración es la parte más importante de la programación ya que cada programa siempre tendrá errores.
        Uno debe mantener la calma y la compostura durante la depuración, lo ayudará a depurar mejor.
        Siempre es una buena práctica imprimir valores o declaraciones en la consola o comentar las secciones de su código para identificar y corregir posibles errores.
        Hay algunos errores en este programa.. Veamos si puede identificarlos y solucionarlos para ir a la siguiente pantalla usando el botón "IR"... ¡Todo lo mejor!
        </Text>
        <TouchableOpacity style = {styles.button}
        onPress = {()=>{
          this.nextScreen()
        }}>
        <Text style = {styles.buttonText}>IR</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  displayText:{
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight : 'bold'
  },
  button: {
    width:60,
    height: 60,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 30,
    alignItems: 'center'
  },
  buttonText:{
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignText: 'center',
    alignSelf: 'center',
    marginTop: 10
  }
})