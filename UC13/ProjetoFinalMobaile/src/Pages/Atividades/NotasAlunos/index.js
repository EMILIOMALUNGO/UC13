import React, { useState,useEffect } from 'react' 
import {ScrollView, Text, TouchableOpacity, View,StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'



 import apiCliente from '../../../API/apiCliente'

export default function NotasAlunos(){

    const[notas, setNotas] = useState([])

    async function BuscarCategotia() {
        const response = await apiCliente.get("/ListarNotas")
        setNotas(response.data)
        // console.log(response.data)
        return
    }
    useEffect(() => {
        BuscarCategotia()
    }, [notas])

   //console.log(notas)

    return(
        <SafeAreaView style={styles.container}>
          <View style={styles.conte12}>
         
            <View style={styles.conte13}>
                <Text style={styles.conte14} >controle das Notas e faltas dos Alunos </Text>
                </View>
            <View>           
              { notas.map((todos)=>{
                  return(
                      <View style={styles.listra1} key={todos.id}>
                        <ScrollView horizontal>
                        <View style={styles.listra}>
                       <Text>Nome:{todos.nome}</Text>
                       <Text>RA:{todos.ra}</Text>
                       <Text>NotaB1:{todos.notaB1}</Text>
                       <Text>NotaB2:{todos.notaB2}</Text>
                       <Text>NotaB3:{todos.notaB3}</Text>
                       <Text>Media:{todos.media}</Text>
                       <Text>Falta:{todos.falta}</Text>      
                    </View>
              </ScrollView>
                    </View>
                )
              })

              }

            </View>      
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    conte12:{ 
     padding:5
    
    },
    conte13:{
        marginTop:30,
        alignItems:'center',
        backgroundColor:"#000",
         },
         conte14:{
            fontSize:20,
            color:"#FFF"
         },
         listra:{
        flexDirection:"row",
        margin:5,
        gap:5,
        transform:"none"
        
         },
         listra1:{
            marginTop:10,
         }



})

