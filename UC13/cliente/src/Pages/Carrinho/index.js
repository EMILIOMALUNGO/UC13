import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet,SafeAreaView , Button, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';

import apiCliente from '../API/apiCliente';


export default function Carrinho() {
  const navigation = useNavigation()

  const route = useRoute();
  const { id } = route.params;
  Alert(id)

  const [produto, setProduto] = useState({})
  const [nome, setNome] = useState("")

  const [excluir, setExcluir] = useState('')
  const [categoriaId, setCategoriaId] = useState('')
  const [categoria, setCategoria] = useState([''])



  //console.log(produto)
  async function Encarrinho() {

    const response = await apiCliente.get(`/listarProduto/${id}`)
    setProduto(response.data)
   // console.log(response.data)

  }
  useEffect(() => {
    Encarrinho()
  }, [])


  async function handlePagar(){
    navigation.navigate("Dashboard")
   
  }
  useEffect(() => {
    async function handleAsyncNome() {
      const iNome = await AsyncStorage.getItem('@nome')
      const nome = JSON.parse(iNome)
      setNome(nome)
    }
    handleAsyncNome()
  })

 //console.log(nome)
  async function salvarItem(e) {

    try{
      e.preventDefault()
      const ClienteId = nome
      const response = await apiCliente.post('/CriarPedidos', {
          ClienteId
      })
      setExcluir(response.data)
      console.log(response.data)

    }catch(error){
      console.log(error.response)

    }
   
    }
    useEffect(()=>{
      salvarItem()
    },[excluir])
  
      

      
  

     



  async function handleCadas() {
  navigation.navigate("Dashboard")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <View>
          <Image style={styles.image1} source={require('../../../assets/pizza2.jpg')} />
        </View>

        <View style={styles.veja}>
          <Text style={styles.dicas}>Veja os detalhes do teu produto</Text>
        </View>

        {produto !== null ? (
          produto.length > 0 ? (
            produto.map((item, index) => (
              <React.Fragment key={index}>

                <View style={styles.dadoAPI}>

                <View style={styles.dadosusuarioaAPI}>
                  <Image style={styles.iamgem} source={{ uri: `http://10.10.10.33:3333/file/${item.banner}` }} />
                </View>

                <View style={styles.item}>
                  <View>
                  <Text>Nome: {item.nome}</Text>
                  <Text>Quantidade: {item.quantidade}</Text>
                  <Text>Tamanho: {item.tamanho}</Text>
                  <Text>Preço: {item.preco}</Text>
                  <Text>fabricante: {item.fabricante}</Text>
                  </View>
                     <View style={styles.Botao1}>
                      
                      <View style={styles.Botao2}>
                        <TouchableOpacity onPress={handlePagar}>
                          <Text>Excluir</Text>
                        </TouchableOpacity>
                      </View>

                      <View>
                    <TouchableOpacity style={styles.Botao3} onPress={salvarItem}>
                     <Text style={styles.Button1}>Comprar</Text>
                   </TouchableOpacity>
                      </View>

                     </View>

                </View>
                </View>
              </React.Fragment>
            ))
          ) : (
            <Text>Nenhum agendamento encontrado.</Text>
          )
        ) : (
          <Text>Carregando...</Text>
        )}

      </View>
    </SafeAreaView>
      );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  image1:{
    width: "100%",
    height: 230,
    
  },
  veja:{
padding:20,
alignItems:'center',
textAlign:"center",
backgroundColor:"#6FDE9A",
  },
  dicas:{
    color:"#fff",
    fontSize:20,
  },
  dadoAPI:{
    marginTop:20,
    flexDirection:'row',
    marginStart:20,
    marginRight:10,
    gap:35,
    borderColor:"#000",
    borderWidth:0.5,
    borderRadius:10,
    padding:15

  },
  iamgem: {
    width: 130,
    height: 170,
    borderRadius: 10
  },
  Botao1:{
    flexDirection:'row',
    gap:20,
    marginTop:5
  },
  Botao2:{
    backgroundColor:'#E1382B',
    padding:15,
    borderRadius:5
  },
  Botao3:{
    backgroundColor:'#2DE033',
    padding:15,
    borderRadius:5
  }
})