import React, { useEffect, useState } from 'react' 
import {Text, View,TouchableOpacity,StyleSheet} from 'react-native'
import {Picker} from '@react-native-picker/picker';


import apiCliente from '../../../API/apiCliente'



export default function GrupoA(){

    const [listarCategoria, setListarCategoria]= useState([''])
   const [listar, setListar]= useState([''])



    async function handleListar(){
        const respopnse = await apiCliente.get('/ListarCategorias')
        setListarCategoria(respopnse.data)
    }
    useEffect(()=>{
        handleListar()
    },[])


   
    
    async function hanDlePEAR(id){
        alert(id)
         //   try{        
         //    const respopnse =  await apiCliente.get(`/ListarCategoriaID/${id}`) 

               
      //  }catch(error){
      //  console.log(error)

  //  }
}
    return(
        <View style={styles.container}>

            <View style={styles.containe1}>
            <View style={styles.containe2}>
            <Text style={styles.containe3}>Quer saber os integrante do GrupoA?</Text>
            <Text style={styles.containe3}>Seleciona Abaixo</Text>
            </View>
           
            <View style={styles.containe4}>
                 <Picker
                    selectedValue={listar}
                    onValueChange={(itemValue,itemIndex) =>
                        setListar(itemValue)}>
                            
                       <option>Selecione...</option>

                    {  
                            listarCategoria.map((pegar)=>{
                                //console.log(pegar)
                               return(
                            
                                <Picker.Item  label={pegar.nomes} value={pegar.id} key={pegar.id}/>

                                              
                            ) 
                        })
                    }

                 </Picker>
                 <View style={styles.containe5}> 
                <TouchableOpacity onPress={(e)=> hanDlePEAR(pegar.id)}>
                 <Text style={styles.containe6}>Buscar</Text>
                 </TouchableOpacity>
                 </View>
                 </View>
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