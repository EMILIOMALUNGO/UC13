import React from "react";
import { View,Text } from "react-native";
import { useEffect,useState } from "react";


import AsyncStorage from "@react-native-async-storage/async-storage";




export default function Carrinho2(){
  
  const [dados, setDados] = useState([''])
  

  useEffect(() => {
    const minhalista = AsyncStorage.getItem("@dadoscarrrinho")
    setDados(JSON.parse(minhalista) || [])
  }, [])
  
  function excluirDado(id) {
    let filtroDados = dados.filter((item) => {
      return (item.id !== id)
    })
    setDados(filtroDados);
    AsyncStorage.setItem("@dadoscarrrinho", JSON.stringify(filtroDados))    
  }






    return(
        <View>
            <Text>Vamod rodar</Text>
        </View>
    )
}