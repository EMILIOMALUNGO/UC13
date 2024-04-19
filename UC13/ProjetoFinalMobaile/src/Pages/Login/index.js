import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, Button, TouchableOpacity, View, TextInput } from "react-native";
//import  Icon  from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import apiCliente from "../../API/apiCliente";



export default function Login() {
    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState("")
     
    async function handleLogin(){
        if (!email || !password) {
            alert('Preecha os campos vazios')
        }
        else if (email==email || password==password) {
            alert("email ou senha esta incorreto")
        }
        
        try{
            const response =  await apiCliente.post('/LoginUsuarios',{
                email,password
            })
             setLogin(response.data)
             navigation.navigate("DashBoard")
        }catch(Error){
            console.log(Error)
        }
        setEmail('')
        setPassword('')
    }
    useEffect(()=>{
        handleLogin()
    },[])

    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container0}>
                <Text style={styles.tela0} >QUADRO DE ANÚNCIO</Text>
            </View>
            <Text style={styles.tela1}>Faça o seu Login</Text>

            <View style={styles.container1}>

                <Text style={styles.input} >Email</Text>
                <View style={styles.container2}>
                    <View>
                        <MaterialCommunityIcons name="email-send-outline" size={24} color="#ffff" style={styles.Icon0} />
                    </View>

                    <View>
                        <TextInput placeholder="Digita seu Email"  placeholderTextColor='#fff'
                        value={email} onChangeText={setEmail} style={styles.input1}/>
                    </View>
                </View>

                <Text style={styles.input} >Senha</Text>
                <View style={styles.container2}>
                    <View>
                        <AntDesign name="lock1" size={24} color="#fff" style={styles.Icon0} />
                    </View>

                    <View>
                        <TextInput placeholder="Digita sua Senha" placeholderTextColor='#fff'
                        value={password} onChangeText={setPassword} style={styles.input1} />
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate("RecuperarSenha")}>
                    <Text style={styles.tela}>Esqueceu a Senha?</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLogin}>
                    <Text style={styles.tela2}>Entrar</Text>
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
    container0: {
        marginTop: 110,
      
    },
    container1: {
        marginTop: 120,
        backgroundColor: '#fff',
       borderTopEndRadius:50,
       borderTopStartRadius:50,
        flex:1
    },
    container2: {
        padding: 15,
        borderEndWidth: 1,
        backgroundColor: "#3953E5",
        borderRadius: 20,
        marginStart: 10,
        marginRight: 10,
        margin: 5,
        flexDirection: 'row'
    },
    input: {
        marginTop:20,
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
        color:'#fff',
        alignItems:'center',
        textAlign:'center',
    },
    tela1: {
        marginTop: 20,
        fontSize: 20,
        alignItems:'center',
        textAlign:'center',
        color:'#fff'
    },
    tela: {
        marginTop: 10,
        marginStart: 20,
        
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