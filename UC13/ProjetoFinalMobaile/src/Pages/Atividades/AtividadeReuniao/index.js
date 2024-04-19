import React from 'react'
import { Text, View, StyleSheet, Image, Imagem, TouchableOpacity, FlatList, SafeAreaView, ScrollView } from 'react-native'
//import { SelectList } from 'react-native-dropdown-select-list'
import { useEffect, useState } from 'react'

import apiCliente from '../../../API/apiCliente'
export default function AtividadeReuniao() {

  const [listarAtividade, setListarAtividade] = useState([])

  async function ListarAtividades() {
    const response = await apiCliente.get('/ListarAtividade')
    setListarAtividade(response.data)
  }
  useEffect(() => {
    ListarAtividades()
  }, [])

 // console.log(listarAtividade)


  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container1}>
        <ScrollView>
          <View style={styles.reunioa}>
            <Text style={styles.reunioa1}>Atividade e Reunião</Text>
          </View>

          {listarAtividade.map((item) => {
            return (
              
              <View key={item.id}>

                <View style={styles.vamos1}>
                  <Text style={styles.vamos}>Atividade:{item.nome}</Text>
                </View>
                <View style={styles.imagem1}>
                  <Image style={styles.imagem}
                    source={{ uri: `http://10.10.10.33:3333/files/${item.banner}` }} />
                </View>
              </View>


            )
          })}

                
      </ScrollView>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  reunioa: {
    marginTop: 50,
  },
  reunioa1: {
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20
  },
  vamos1: {
    padding:30,
    marginTop:20,
    alignItems: 'center',
    textAlign: 'center',
    
  },
  vamos: {
    fontSize:15
  },
  imagem1: {
    alignItems: 'center',
   
  },
  imagem: {
 width:200,
 height:200,

    
  },

})