
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect,useState } from "react";
import firebase from "../FireBaseConnet";
import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';
import { requestForegroundPermissionsAsync,getCurrentPositionAsync,watchPositionAsync,LocationAccuracy} from 'expo-location'

import Login from "../Login";

export default function Dashboard(){
  const navigation = useNavigation()

  const[id, setId] = useState("")
  const [nome, setNome] =  useState ("")
  const [localizacao, setLocalizacao] = useState(null)
  
  
  useEffect(() => {
    async function requisitarLocal() {
      const { granted } = await requestForegroundPermissionsAsync()
      if (granted) {
        const positionAtual = await getCurrentPositionAsync()
        setLocalizacao(positionAtual)
      }
    }
    requisitarLocal()
  }, [])
  
 

  const motoqueiros= 1
  
    useEffect(() => {
      async function handleAsyncNome() {
          const iNome = await AsyncStorage.getItem('@nome')
          const nome = JSON.parse(iNome)
          setNome(nome)
      }
      handleAsyncNome()
  })



  useEffect(()=>{
    async function handleAsyncNome(){
        const iNome = await AsyncStorage.getItem('@id')
        const id = JSON.parse(iNome) 
        setId(id)
      }
      handleAsyncNome()
  },[])
    

 
    async function EndoEnviar(){
      
       let usuarios = await firebase.database().ref('motoqueiro').child(motoqueiros)
      //esse parte de baixo serve para gerar a chave unico
      //e mandar esses dados para firebase
       let chave = usuarios.push().key
   
       usuarios.child(chave).set({
         id:id,
         nome:nome,
         latitude: localizacao.coords.latitude,
         longitude: localizacao.coords.longitude
          
       })
        setId("")
       setNome('')
    }
   
      useEffect(()=>{
           async function dados(){
            await firebase.database().ref('usuario').set('nome')
           }
           dados()
      },[])

      async function voltar(){
        navigation.navigate('Login')
      }
       

     //   async function EndoEnviar(){
     // let name = await firebase.database().ref("motoqueiros").child(id);

     // name.child("localizacao").set({
      //  nome: nome,
      //  latitude: localizacao.coords.latitude,
     //   longitude: localizacao.coords.longitude,
     // });
    //  Keyboard.dismiss();
   // }
  

     return(
        <View style={styles.container}>
            <Text>Dashboard</Text>


            <TouchableOpacity style={styles.botao} onPress={voltar}>
         <Text style={styles.botao1}>voltar</Text>
       </TouchableOpacity>

          <Text>{nome}</Text>
          <Text>{id}</Text>
        
          <TouchableOpacity style={styles.botao} onPress={EndoEnviar}>
         <Text style={styles.botao1}>Verificar pedido</Text>
       </TouchableOpacity>
      
          </View>
     )

    }

    const styles= StyleSheet.create({
        container:{
            flex:1,
            alignItems:'center',
        }
    
    })