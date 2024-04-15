
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect,useState } from "react";

import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';

import Login from "../Login";

export default function Dashboard(){
    const navigation = useNavigation()

    const [buscar, setBuscar]= useState("")
   const [nome,setNome] = useState ("")
   const [ respNome, setRespNome ] = useState('')
   const [respToken, setRespToken] = useState("")
   const [motozem, setMotozen]= useState([''])
    
  async function voltar(){
    navigation.navigate('Login')
  }

  useEffect(()=>{
    async function handleAsyncNome(){
        const iNome = await AsyncStorage.getItem('@nome')
        const nome = JSON.parse(iNome) 

        setRespNome(nome)
      }
      handleAsyncNome()
  },[])

  useEffect(()=>{
  async function handleAsyncToken(){
    const iToken = await AsyncStorage.getItem('@token')
    const token = JSON.parse(iToken)

    setRespToken(token)
  }
  handleAsyncToken()
},[])

   useEffect(()=>{
    async function handleMotoqueiro(){
      const Idmotoqueiro= await AsyncStorage.getItem('@id')
      const  Usuariom = JSON.parse(Idmotoqueiro)
      setMotozen(Usuariom)
    }
    handleMotoqueiro()
   },[])

  

     return(
        <View style={styles.container}>
            <Text>Dashboard</Text>


            <TouchableOpacity style={styles.botao} onPress={voltar}>
         <Text style={styles.botao1}>voltar</Text>
       </TouchableOpacity>

          <Text>{respNome}</Text>
          <Text>{respToken}</Text>
          <Text>{motozem}</Text>
          <Text>{motozem}</Text>

          </View>
     )

    }

    const styles= StyleSheet.create({
        container:{
            flex:1,
            alignItems:'center',
        }
    
    })