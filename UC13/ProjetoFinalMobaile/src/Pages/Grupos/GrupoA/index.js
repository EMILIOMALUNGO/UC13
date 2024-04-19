import React, { useEffect, useState } from 'react' 
import {Text, View,TouchableOpacity,StyleSheet} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";


import apiCliente from '../../../API/apiCliente'


export default function GrupoA(){
    const navigation = useNavigation()

    const [listarGrade, setListarGrade] = useState([''])
    const [categorias, setCategorias] = useState(['']) 
    const [idcategoria, setIdCategoria] = useState([""])

 
    async function BuscarCategotia() {
        const response = await apiCliente.get("/ListarCategorias")
        setCategorias(response.data)
        // console.log(response.data)
        return
    }
    useEffect(() => {
        BuscarCategotia()
    }, [categorias])


    async function BuscarGrade() {
        const response = await apiCliente.get("/ListarUsuario")
        setListarGrade(response.data)
        //console.log(response.data)
        return
    }
    useEffect(() => {
        BuscarGrade() 
    }, [])

    const gradeFiltrado = listarGrade.filter((gradeucs)=>
    gradeucs.categoriaId ===idcategoria)
  
    return(
        <View style={styles.container}>
         
            <View style={styles.containe2}>
            <Text style={styles.containe3}>Quer saber qual grupo você pertence?</Text>
            <Text style={styles.containe3}>Seleciona Abaixo</Text>
            </View>
              <View>
              <View style={styles.containeres3}>
                    <Picker style={styles.containeres4}
                        selectedValue={idcategoria}
                        onValueChange={(itemValue, itemIndex) =>
                            setIdCategoria(itemValue)}>

                        {
                            categorias.map((pegar, index) => {
                                //console.log(pegar)
                                return (

                                    <Picker.Item label={pegar.nomes}  value={pegar.id} key={pegar.id} />

                                )
                            })
                        }

                    </Picker>
                    <Text style={styles.containeres5}>Veja os integrante do grupo:</Text>
                    {
                        gradeFiltrado.map((gradeucs)=>(
                           <Text key={gradeucs.id}>
                        <View>
                        <View style={styles.containeres6}>
                       <Text style={styles.containeres7}>{gradeucs.nome}</Text> 
                        </View>

                 
                    </View>
                           </Text>
                        ))
                    }
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
   
    containe2:{
        alignItems:'center',
        padding:20,  
        marginTop:40    
    },
    containeres3:{
     marginTop:20
    },
    containeres4:{
        backgroundColor:"#B16007",
        marginStart:15,
        marginRight:15, 
        color:"#fff"
    },
    containe3:{
        fontSize:17
    },
    containeres5:{
        marginTop:20,
        marginStart:30,
        fontSize:20
    },
    containeres6:{
        marginStart:50, 
        fontSize:20,
        marginTop:10
    },
    containeres7:{

    }

})