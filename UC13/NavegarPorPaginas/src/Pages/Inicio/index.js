import React from "react";
import { Text,TouchableOpacity,View } from "react-native";


import { useNavigation } from "@react-navigation/native";



export default function Inicio(){
    const navigation=useNavigation()

    return(
        <View>
            <Text>INICIALMENTE DA COSTA </Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Cliente')}>
                <Text>ir para cliente</Text>
            </TouchableOpacity>
        </View>
    )
}