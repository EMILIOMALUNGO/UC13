import React, { useEffect, useState } from 'react' 
import {Text, View,TouchableOpacity,StyleSheet} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";

import apiCliente from '../../../API/apiCliente'


export default function GrupoA({route}){
    const navigation = useNavigation()

    const { id } = route.params;
    const [listar, setListar] = useState({})

    async function handleGA(){
        try{
            const response = await  apiCliente.get(`/ListarCategoriaID/${id}`)
            setListar(response.data)
            console.log(response.data)
        }catch(error){
            console.log(error)
        }
        
    }
    
    useEffect(()=>{
      handleGA()
    },[])

    console.log()
//
   // const [listarCategoria, setListarCategoria]= useState([''])
   //const [listar, setListar]= useState([''])



  
    return(
        <View style={styles.container}>

          
            <View style={styles.containe2}>
            <Text style={styles.containe3}>Quer saber os integrante do GrupoA?</Text>
            <Text style={styles.containe3}>Seleciona Abaixo</Text>
            </View>
              <View>
                
              </View>
         
                 <View style={styles.containe5}> 
                <TouchableOpacity onPress={handleGA}>
                 <Text style={styles.containe6}>Buscar</Text>
                 </TouchableOpacity>
                 </View>
                
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {        
        backgroundColor: '#ffff',
        flex:1,
    },
    containe1:{
      marginTop:70,
    },
    containe2:{
        alignItems:'center',
        padding:20,      
    },
    containe3:{
        fontSize:17
    },
    containe4:{
        
        width:'50%',
        marginStart:30,
       
        
    },
    containe5:{
        borderRadius:12,
        backgroundColor:'#E87F20',
        padding:10,
    },containe6:{
       alignItems:"center",
       textAlign:'center',
       color:"#fff",
       fontSize:15

    }

})