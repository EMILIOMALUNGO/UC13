import React from 'react' 
import {Text, View,StyleSheet,Image,Imagem,TouchableOpacity,FlatList} from 'react-native'
//import { SelectList } from 'react-native-dropdown-select-list'
import { useEffect,useState } from 'react'

import apiCliente from '../../../API/apiCliente'
export default function AtividadeReuniao(){
    
   const [listarAtividade , setListarAtividade] = useState([])

   async function ListarAtividades(){ 
       const response = await apiCliente.get('/ListarAtividade')
       setListarAtividade(response.data)
   }
   useEffect(()=>{
    ListarAtividades()
   },[])

   console.log(listarAtividade)


    return(
        <View style={styles.container}>
        <View style={styles.reunioa}>
            <Text style={styles.reunioa1}>Atividade e Reunião</Text>
          </View>

          {listarAtividade.map((item)=>{
            return(
                <View key={item.id}>
                  
                  <View>
                  <Text style={styles.vamos}>nome:{item.nome}</Text>
                  </View>


                  <TouchableOpacity onPress={ListarAtividades}>
                    <Text style={styles.iamgem}>VERIFICAR</Text>
                  </TouchableOpacity>
                </View>

            )
          }) }
          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {        
        backgroundColor: '#ffff',
        flex:1,
    },
    reunioa:{
        marginTop:70,
    },
    reunioa1:{
      alignItems:'center',
      textAlign:'center',
      fontSize:20
    },
    iamgem:{
        width:400,
        height:100,
       
    },
 
})