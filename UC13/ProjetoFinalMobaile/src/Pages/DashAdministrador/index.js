import React from 'react'
import { StyleSheet, SafeAreaView, View, Text, Image, TouchableOpacity, ScrollVeiw } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';



export default function DashAdministrador() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container25}>
                <View style={styles.container26}>
                    <View>
                        <Image style={styles.Image3} source={require('../../../assets/mundo.jpg')} />
                    </View>
                    <View>
                        <Text style={styles.Anuncio}>Anúncio</Text>
                    </View>
                </View>
                <View style={styles.AntDesign}>
                    <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                        <AntDesign name="user" size={25} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.container13}>
                <Text style={styles.testo2}>Sua programação diaria você encontra aqui </Text>
            </View>

            <View style={styles.container27}>
                <View style={styles.container28}>
                    <Image style={styles.Image4} source={require('../../../assets/magem10.jpg')} />
                </View>
                
            </View>

            <View style={styles.container29}>

                <View style={styles.container14} >

                    <View style={styles.container16}>
                        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                            <Text style={styles.testo3}>Grupo A</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container15}>
                        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                            <Text style={styles.testo3}>Grupo B</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container15}>
                        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                            <Text style={styles.testo3}>Grupo C</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.container17}>
                        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                            <Text style={styles.testo3}>Grupo D</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.container30}>

                    <View style={styles.container31}>

                        <View style={styles.container32}>
                        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                        <SimpleLineIcons name="grid" size={24} color="black" />
                        <Text style={styles.test5}>Grade{'\n'}das UCS</Text>
                       </TouchableOpacity>
                        </View>

                        <View style={styles.container32}>
                        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                        <AntDesign name="user" size={25} color="black" />
                        <Text style={styles.test5}>Anúncio{'\n'}das faltas</Text>
                       </TouchableOpacity>
                        </View>

                        <View style={styles.container32}>
                        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                        <MaterialIcons name="calendar-month" size={24} color="black" />
                        <Text style={styles.test5}>Atividade {'\n'}do mês</Text>
                       </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.container33}>

                        <View style={styles.container32}>
                        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                        <MaterialIcons name="workspaces" size={24} color="black" />
                        <Text style={styles.test5}>Atividade{'\n'}e Vagas</Text>
                       </TouchableOpacity>
                        </View>

                        <View style={styles.container32}>
                        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                        <MaterialIcons name="meeting-room" size={25} color="black" />
                        <Text style={styles.test5}>Reunião{'\n'}</Text>
                       </TouchableOpacity>
                        </View>

                        <View style={styles.container32}>
                        <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                        <Foundation name="results-demographics" size={25} color="black" />
                        <Text style={styles.test5}>Nota dos{'\n'}Alunos</Text>
                       </TouchableOpacity>
                           
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3E681A',

    }, container25: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    container26: {
        gap: 15,
        flexDirection: 'row',
    }, Image3: {
        marginStart: 30,
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        borderWidth: 1,
      
    },
    Anuncio: {
        fontSize: 20,
        color: '#E9F556',
    }, AntDesign: {
        marginRight: 30,

    }, container13: {
        marginTop: 5,
        marginRight: 20,
        marginStart: 20,
    },
    testo2: {
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ED212A',
        color: '#ffffff',

    },
    container27: {
        marginTop: 10,

    }, container28: {
        borderWidth: 2,
        margin: 5,
        marginRight: 10,
        marginStart: 20,
        borderRadius: 20,
    },
    Image4: {
        width: '100%',
        height: 150,
        borderRadius: 10,

    }, container29: {
        borderColor: '#fff',
        marginTop: 140,
        backgroundColor: '#BDC5E8',
        borderTopStartRadius: 30,
        borderTopRightRadius: 30,
        flex: 1
    },
    container30:{


    },
    container14: {
        justifyContent: 'space-between',
        backgroundColor: '#364042',
        flexDirection: "row",
        height: 80,
        borderTopStartRadius: 30,
        borderTopRightRadius: 30,
    },
    container16: {
        padding: 22,
        backgroundColor: '#000',
        borderTopStartRadius: 30,
    },
    container15: {
       padding: 22,
        backgroundColor: '#000',
    },
    container17: {
        padding: 22,
        backgroundColor: '#000',
        borderTopRightRadius: 30,
    },
    testo3: {
        textAlign: 'center',
        alignItems: 'center',
        color: '#ffffff',
    },container31:{
        borderWidth: 1,
        borderColor: '#B02838',
        flexDirection:'row',  
        justifyContent:'space-between',
        margin:2,
    },
    container33:{
        borderWidth:1,
        borderColor: '#B02838',
        flexDirection:'row',
        margin:2,
        justifyContent:'space-between',
        
    },container32:{
        borderRadius:10,
          backgroundColor:'#fff',
          width:132,
          height:110,
          gap:4,
    },test5:{
        textAlign:'center',
        alignItems:'center',
        fontSize:15

      } 


   
})