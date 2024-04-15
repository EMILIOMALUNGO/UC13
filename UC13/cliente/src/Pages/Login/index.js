
import { useEffect,useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput,Image, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import apiCliente from '../API/apiCliente';


export default function Login() {
  const navigation=useNavigation()


// const [nome,setNome] = useState ("")
  const [enviar, setVenviar] = useState('')
 const [email, setEmail ] = useState(" ")
 const [password, setPassword]= useState("")


//console.log(enviar)
 async function Buscarusuari(e){
  e.preventDefault()

  if (!email|| !password) {
    alert("existem campos vazios")   
   }
 
   try{
     const response = await apiCliente.post('/LoginCliente',{
       email,password
     })
     setVenviar(response.data)
     //console.log(response.data.dados)
      await AsyncStorage.setItem('@id', JSON.stringify(response.data.id))
      await AsyncStorage.setItem('@nome', JSON.stringify(response.data.nome))
      await AsyncStorage.setItem('@token', JSON.stringify(response.data.token))

      navigation.navigate("Dashboard")
      
    } catch (Error) {
    // console.log(Error.response)
    return
 }
}
useEffect(()=>{
Buscarusuari() 
 },[])


 async function handleCadastrar() {
   navigation.navigate("Dashboard")
}



 async function handleAsyncApagar(){
   await AsyncStorage.clear();
 }


 return (
   <View style={styles.container}>
         <View>
             <Image style={styles.image} source={require('../../../assets/images.png')}/>
         </View>

     <View>
       <Text style={styles.Text}>Login Cliente</Text>
     </View>

     <View style={styles.container2} >
       <TextInput style={styles.input1} placeholderTextColor='#fff'  placeholder='Digita email' value={email}  onChangeText={setEmail}/>
     </View>
       
     <View style={styles.container2}>
       <TextInput style={styles.input1} placeholderTextColor='#fff' placeholder='Digita a sua senha' value={password} onChangeText={setPassword}/>
     </View>
     <TouchableOpacity onPress={handleCadastrar}>
       <Text style={styles.botao1w}>Mudar de Tela</Text>
   </TouchableOpacity>
     <TouchableOpacity style={styles.botao} onPress={Buscarusuari}>
       <Text style={styles.botao1}>Enviar</Text>
     </TouchableOpacity>
        
       </View>

  
 );
}

const styles = StyleSheet.create({
 container: {
flex:1,
backgroundColor:'#121212'
 },
 Text:{
   marginTop:10,
   fontSize:25,
   alignItems:'center',
   color:'#fff',
   textAlign:'center'
 },
 image:{
   marginTop:0,
   justifyContent:'center',
  alignItems:'center',
 marginStart:90,
 width:250,
 height:250,
 borderRadius:250/2

 },
 container2:{
   marginTop:10,
  justifyContent:'center',
  alignItems:'center'
 },
 input1:{
  width:'80%',
  height:55,
  backgroundColor:'#AB9162',
  borderRadius:20,
 
  margin:5,
  textAlign:'center',
  fontSize:20
 },
 botao:{
   justifyContent:'center',
   alignItems:'center'
    
 },
 botao1:{
   width:"80%",
   padding:10,
   margin:5,
   borderColor:1,
   backgroundColor:"#fff",
   borderRadius:10,
   textAlign:'center',
   fontSize:20 ,
   color:"#000" 
 },
 botao1w:{
   color:'#fff',
   textAlign:'center'  }

});