import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet,Image,Imagem, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker';
import apiCliente from '../../../API/apiCliente'

export default function GradedasUcs() {



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
        const response = await apiCliente.get("/ListartGradeda")
        setListarGrade(response.data)
        //console.log(response.data)
        return
    }
    useEffect(() => {
        BuscarGrade() 
    }, [])

    const gradeFiltrado = listarGrade.filter((gradeucs)=>
      gradeucs.categoriaId ===idcategoria)
   // console.log(listarGrade)


 
    //console.log(categoria)



    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.containeres1}>

                <View style={styles.containeres2}>
                    <Text style={styles.Text}>O conograma de tudo que você vai estudar no curso Técnico de informatica para web.</Text>
                </View>

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
                    <Text style={styles.containeres5}>GRADE SELECIONADO:</Text>
                    {
                        gradeFiltrado.map((gradeucs)=>(
                           <Text key={gradeucs.id}>
                        <View>
                        <View style={styles.containeres6}>
                       <Text style={styles.containeres7}>  {gradeucs.nome}</Text> 
                        </View>

                    <View style={styles.imagem1}>
                   <Image style={styles.imagem}
                    source={{ uri: `http://10.10.10.33:3333/files/${gradeucs.banner}` }} />
                  </View>
                    </View>
                           </Text>
                        ))
                    }
                </View>               
            </View>
           </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        flex: 1,
    },
    containeres1: {
        marginTop:30,
    },
    containeres2:{    
        alignItems:'center', 
        padding:15      
    },
    Text:{
       fontSize:17,
    },
    containeres4:{
     backgroundColor:"#21ED3B",
    marginStart:15,
    marginRight:15,
    },
    containeres5:{
        marginTop:20,
        marginStart:30,
    },
    containeres6:{
    padding:10,
     alignItems:"center"
    },
    containeres7:{
fontSize:20,
    },
    imagem1:{
      marginTop:7,
      margin:5
    },
      imagem: {
     width:400,
     height:300,
    
        
      },
})