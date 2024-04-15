import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, Button, TouchableOpacity, View, TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";



export default function Inicio() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.Image}>
                <Image style={styles.Image1} source={require("../../../assets/mundo.jpg")} />
            </View>

          <View style={styles.containe}>
            <View style={styles.container3}>
                <Text style={styles.texto0} >QUADRO DE ANÚNCIO</Text>
            </View>
            <Text style={styles.texto1}>Tudo sobre o seu mundo de quadro de anúncio!!</Text>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <View style={styles.container4}>
                    <View>
                        <MaterialCommunityIcons name="account-outline" size={24} color="#fff" />
                    </View>
                    <View>
                        <Text style={styles.texto2}>Login</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                <View style={styles.container4}>
                    <View>
                        <AntDesign name="idcard" size={24} color="#fff" />
                    </View>
                    <View>
                        <Text style={styles.texto2}>Cadastrar</Text>
                    </View>
                </View>
            </TouchableOpacity>
         </View>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d',

    },
    Image: {
        marginTop: 170,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    Image1: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        borderWidth: 1,

    },
    containe:{
        marginTop:90,
        backgroundColor: '#fff',
       borderTopEndRadius:10,
       borderTopStartRadius:30,
        flex:1
    },
    container3: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    container4: {
        backgroundColor: "#342246",
        marginTop: 15,
        marginStart: 30,
        marginRight: 30,
        flexDirection: 'row',
        marginBottom: 5,
        padding: 15,
        borderWidth: 1,
        borderRadius: 3,
    },
    texto0: {
        fontSize: 20
    },
    texto1: {
        marginTop: 10,
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },

    texto2: {
        color: '#ffffff',
        marginStart: 110,
        fontSize: 17,
    },



})