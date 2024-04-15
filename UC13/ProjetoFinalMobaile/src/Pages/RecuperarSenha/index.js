import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'


import { useNavigation } from "@react-navigation/native";






export default function RecuperarSenha() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container7}>
                <Text style={styles.senha}>Esqueceu sua Senha?</Text>
                <Text style={styles.senha}>Cadastra uma nova Senha.</Text>
            </View>


            <View style={styles.container6}>
            <View style={styles.container8}>
                    <View style={styles.container9}>
                        <TextInput style={styles.input1} placeholder="Colaca a nova senha" placeholderTextColor='#fff' pal />
                    </View>

                    <View style={styles.container9}>
                        <TextInput style={styles.input1} placeholder="Colaca a nova senha" placeholderTextColor='#fff' />
                    </View>
              
                <View style={styles.container10}>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.tela3} placeholderTextColor='#fff'>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#38a69d',
    },
    container6: {
        borderBottomRightRadius:110,
        borderTopStartRadius:100,
        marginTop: 160,
        backgroundColor: '#9B52F2',
        flex: 1

    },
    container7: {
        marginTop: 120,
        alignItems: 'center',
        textAlign: 'center',
        margin: 5

    },
    senha: {
        fontSize: 20,
        color: '#ffffff'
    },
    container8:{
     marginTop: 50,
    },
    container9: {
        padding: 15,
        borderEndWidth: 1,
        backgroundColor: '#000000',
        borderRadius: 20,
        marginStart: 10,
        marginRight: 10,
        margin: 10
    },
    input1: {
        color: '#FFFFFF',
        margin: 5,
        fontSize: 15,
        alignItems: 'center',
        textAlign: 'center'
    },
    tela3: {
        marginStart: 30,
        marginRight: 30,
        fontSize: 15,
        marginTop: 30,
        marginBottom: 5,
        padding: 15,
        borderWidth: 1,
        color: '#ffffff',
        backgroundColor: '#000000',
        borderRadius: 3,
        textAlign: "center",
    },

})