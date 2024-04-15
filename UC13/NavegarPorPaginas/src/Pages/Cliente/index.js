import React from "react";
import { Text,TouchableOpacity,View } from "react-native";
import { useNavigation } from "@react-navigation/native";




export default function Cliente(){
       const navigation= useNavigation()
     return(
        <View>
            <Text>vamos dar uma volta</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Usuario')}>
                <Text>ir para usuario</Text>
            </TouchableOpacity>
        </View>
     )

}