
import React from "react";

import { useNavigation ,Link} from "@react-navigation/native";

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from "react";
import firebase from "../FireBaseConnet";
import { StyleSheet, TouchableOpacity, Text, View, Image, Button, StatusBar, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

import Login from "../Login";
import apiCliente from "../API/apiCliente";

export default function Dashboard() {
  const navigation = useNavigation()

  const [id, setId] = useState("")
  const [nome, setNome] = useState("")
  // const [numero, setNumero] = useState('')
  // const [localizacao, setLocalizacao] = useState(false)

  const [dado, SetDado] = useState([''])


  async function handleBuscarProduto() {

    const response = await apiCliente.get('/ListarProduto')
    //console.log(response.data)
    SetDado(response.data)
  }
  useEffect(() => {
    handleBuscarProduto()
  }, [dado])





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




  const cliente = 1

  useEffect(() => {
    async function handleAsyncNome() {
      const iNome = await AsyncStorage.getItem('@nome')
      const nome = JSON.parse(iNome)
      setNome(nome)
    }
    handleAsyncNome()
  })



  useEffect(() => {
    async function handleAsyncNome() {
      const iNome = await AsyncStorage.getItem('@id')
      const id = JSON.parse(iNome)
      setId(id)
    }
    handleAsyncNome()
  }, [])



  async function EndoEnviar() {

    let usuarios = await firebase.database().ref('Cliente').child(cliente)
    //esse parte de baixo serve para gerar a chave unico
    let chave = usuarios.push().key

    usuarios.child(chave).set({
      id: id,
      nome: nome,
      // latitude: localizacao.coords.latitude,
      //longitude: localizacao.coords.longitude

    })
    setId("")
    setNome('')
  }

  useEffect(() => {
    async function dados() {
      await firebase.database().ref('usuario').set('nome')
    }
    dados()
  }, [])




  //<Text style={styles.test3}>ID:{id}</Text>
  return (
    <SafeAreaView style={styles.container}>
       <ScrollView>
      <View style={styles.container1}>
        <View>
          <Text style={styles.test2}>Dashboard</Text>
          <Text style={styles.test3}>Seja bem vindo: {nome}</Text>
          </View>      
        <View>
          <Image style={styles.image1} source={require('../../../assets/pizza2.jpg')} />
        </View>
        </View>
           
        <View style={styles.container2}>

          <Text style={styles.test4}>Desfruta dos nossos Produtos</Text>
        </View>

      
      <View >
        {dado.map((dados) => {
          return (
            
            <View  key={(dados.id)}>
            <View style={styles.containerBack}>
              
                

                <View style={styles.dadosusuarioaAPI}  >
                  <Image style={styles.iamgem} source={{ uri: `http://10.10.10.33:3333/file/${dados.banner}` }} />
                </View>

                   <View>
                  <View style={styles.dadosnome}>
                    <Text>Nome:{dados.nome}</Text>

                    <Text>fabricante:{dados.fabricante}</Text>

                    <Text>quantidade:{dados.quantidade}</Text>
                    <Text>tamanho:{dados.tamanho}</Text>

                    <Text>preco:{dados.preco}</Text>
                  
                  <TouchableOpacity onPress={() => navigation.navigate('Carrinho', { id: dados.id })}>
                     <Text style={styles.Button1}>Comprar</Text>
                  </TouchableOpacity>
                  </View>
                  </View >

                </View>
               
                  </View>
          )
        })
        
      }
      </View >
  
  </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  container1: {
    backgroundColor: "#000",
  
  },
  image1: {
    width: "100%",
    height: 200,
    marginTop:10,
  },
  test2: {
   marginTop:20,
    color: "#fff",
    fontSize: 20,
    alignItems: 'center',
    textAlign: 'center',
  },
  test3: {
    marginTop:10,
   marginStart:20,
    color:'#ffff',
    fontSize: 14,
  },
  container2:{
    padding:15,
    alignItems: 'center',
    textAlign: 'center',
  },
  test4:{
      fontSize:20,
  },
  botao: {
    width: '50%',
    alignItems: 'center',
    padding: 7,
    backgroundColor: '#566BF5',
    borderRadius: 10
  },
  botao1: {
    fontSize: 10,
    color: '#ffffff',
    alignItems: 'center',
    textAlign: 'center',
  },
  botao2: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 15,
  },
  container3: {
    flexDirection: 'row',
    gap: 10,
    marginRight: 10,
    marginStart: 10,
    marginTop: 10,
  },
  
  iamgem: {
    width: 130,
    height: 150,
   
    borderRadius:10
  },
  containerBack:{
    borderBottomColor: '#DB0F1D',
    borderBottomWidth: 0.5,
    flexDirection:'row',
    marginStart:30,
   
    marginBottom:10,
    gap:60,
  },
  Button1:{
  padding:10,
  backgroundColor:"#000",
  color:"#fff",
    alignItems:'center',
    textAlign:'center',
    borderRadius:5,
  },


})