import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";



export default function Usuario(){
    const navigation= useNavigation()

    return(
         <View>
            <Text>MEU PAIS</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Inicio')}>
                <Text>voltar para inicio</Text>             
            </TouchableOpacity>
         </View>
    )
}