
import React, { useEffect } from 'react';
import { useState } from 'react';
import firebase from './FireBaseConnet';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';



 
export default function App() {
  const vendedor= 11
 
  const[nome,setNome] = useState("")
  const [cidade, setCidade] =  useState ("")
 
   
 

  async function EndoEnviar(){
    if (!nome || !cidade) {
       alert ("campos vazios")
    }
      let usuarios = await firebase.database().ref('vendedor').child(vendedor)
      //esse parte de baixo serve para gerar a chave unico
      let chave = usuarios.push().key
 
      usuarios.child(chave).set({
        nome:nome,
        cidade:cidade
      })
      setCidade("")
      setNome('')
  }
 
    useEffect(()=>{
         async function dados(){
          await firebase.database().ref('usuarios').set('nome')
         }
         dados()
    },[])

   
 
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#000' barStyle={'default'} style="auto" />
      <Text>usando o firebase!</Text>
 
      <TextInput placeholder='coloca seu nome ' value={nome} onChangeText={setNome}/>
 
      <TextInput placeholder='coloca a sua cidade' value={cidade} onChangeText={setCidade}/>
 
      <TouchableOpacity onPress={EndoEnviar}>
        <Text>Enviar</Text>
      </TouchableOpacity>
 
      
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 