import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, Button, TouchableOpacity, View, TextInput } from "react-native";
//import  Icon  from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function Administrador() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container0}>
                <Text style={styles.tela0} >QUADRO DE ANÚNCIO</Text>
            </View>
            <Text style={styles.tela1}>Se você é Administrador faça o seu Login</Text>

            <View style={styles.container1}>

                <Text style={styles.input} >Email</Text>
                <View style={styles.container2}>
                    <View>
                        <MaterialCommunityIcons name="email-send-outline" size={24} color="#ffff" style={styles.Icon0} />
                    </View>

                    <View>
                        <TextInput placeholder="Digita seu Email"  placeholderTextColor='#fff' style={styles.input1}/>
                    </View>
                </View>

                <Text style={styles.input} >Senha</Text>
                <View style={styles.container2}>
                    <View>
                        <AntDesign name="lock1" size={24} color="#fff" style={styles.Icon0} />
                    </View>

                    <View>
                        <TextInput placeholder="Digita sua Senha" placeholderTextColor='#fff' style={styles.input1} />
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("RecuperarSenha")}>
                    <Text style={styles.tela}>Esqueceu a Senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("DashAdministrador")}>
                    <Text style={styles.tela2}>Entrar</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#E9F556',
    },
    container0: {
        marginTop: 120,
        marginStart: 30,
    },
    container1: {
        marginTop: 120,
    },
    container2: {
        padding: 15,
        borderEndWidth: 1,
        backgroundColor: "#3953E5",
        borderRadius: 20,
        marginStart: 10,
        marginRight: 10,
        margin: 10,
        flexDirection: 'row'
    },
    input: {
        color: '#DB1006',
        marginStart: 50,
        fontSize: 15,
    },
    input1:{
        color: '#FFFFFF',
        marginStart: 50,
        fontSize: 15,
    },
    tela0: {
        fontSize: 25,

    },
    tela1: {
        marginTop: 25,
        fontSize: 20,
        marginStart: 40,
    },
    tela: {
        marginTop: 10,
        marginStart: 20
    },
    tela2: {
        marginStart: 30,
        marginRight: 30,
        fontSize: 15,
        marginTop: 30,
        marginBottom: 5,
        padding: 15,
        borderWidth: 1,
        color: '#ffffff',
        backgroundColor: "#342246",
        borderRadius: 3,
        textAlign: "center",
    },



})