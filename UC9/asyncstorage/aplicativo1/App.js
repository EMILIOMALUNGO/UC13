 import { useEffect,useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
//import { Colors } from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage'

import apiLocal from "./Api/apiLocal"

export default function App() {

  const [nome,setNome] = useState ("")
  const [nusuario ,setNusuario ] = useState(" ")
  const [ respNome, setRespNome ] = useState('')
  const [password, setPassword]= useState('')
  const [respToken, setRespToken] = useState("")

  async function AndlEnviar(){
   
   try{
     const response = await  apiLocal.post('/LoginMotoqueiro',{
       nusuario,password
     })
     
     await AsyncStorage.setItem('@nome', JSON.stringify(response.data.nome))
     await AsyncStorage.setItem('@token', JSON.stringify(response.data.token))
    
     
  } catch (error) {
     console.log(error)
  }
       
  }
  async function handleAsyncNome(){
    const iNome = await AsyncStorage.getItem('@nome')
    const nome = JSON.parse(iNome)
    setRespToken('')
    setRespNome(nome)
  }
  async function handleAsyncToken(){
    const iToken = await AsyncStorage.getItem('@token')
    const token = JSON.parse(iToken)
    setRespNome('')
    setRespToken(token)
  }

  async function handleAsyncApagar(){
    await AsyncStorage.clear();
  }


  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.Text}>Login Motoqueiro</Text>
      </View>

      <View style={styles.container1} >
        <TextInput style={styles.input} placeholderTextColor='#fff'  placeholder='Digita o seu nome' value={nusuario} onChangeText={setNusuario}/>
      </View>
      <View style={styles.container1}>
        <TextInput style={styles.input} placeholderTextColor='#fff' placeholder='Digita a sua senha' value={password} onChangeText={setPassword}/>
      </View>
      <TouchableOpacity style={styles.botao} onPress={AndlEnviar}>
        <Text style={styles.botao1}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={handleAsyncNome}>
        <Text style={styles.botao2} >Async_Nome</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={handleAsyncToken}>
        <Text style={styles.botao2} >Async_Token</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={handleAsyncApagar}>
        <Text style={styles.botao2} >Async_Apagar</Text>
      </TouchableOpacity>

      <Text style={styles.textResposta}>{respNome}</Text>
      <Text>{respToken}</Text>   
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   marginTop:100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text:{
    fontSize:20
  },
  container1:{
    width:'90%',
  },
  input:{
    padding:10,
    margin:5,
    borderColor:1,
    backgroundColor:"#00ff19",
    borderRadius:5,
    textAlign:'center',
    fontSize:20

  },
  botao:{
    width:'90%',
     
  },
  botao1:{
    padding:10,
    margin:5,
    borderColor:1,
    backgroundColor:"#002cff",
    borderRadius:10,
    textAlign:'center',
    fontSize:20 ,
    color:"#fff"   
  },
  botao2:{
    padding:10,
    margin:5,
    borderColor:1,
    backgroundColor:"#9734ff",
    borderRadius:10,
    textAlign:'center',
    fontSize:20 ,
    color:"#fff" 
  }
});
