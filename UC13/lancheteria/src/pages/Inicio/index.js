import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Inicio(){
    const navigation = useNavigation()
    return(
        <SafeAreaView style={styles.conteinerInicio}>
            <View>
                <Text style={styles.textoTitulo}>Tela de Início</Text>
                <TouchableOpacity 
                style={styles.buttonInicio} 
                onPress={() => navigation.navigate('Dashboard')}>
                    <Text style={styles.textButtonInicio}>Dashboard</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conteinerInicio:{
        flex: 1,
        alignItems: 'center'    
    },
    textoTitulo:{
        marginTop: 10,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#28E8EA'

    },
    buttonInicio: {
        marginTop: 30,
        backgroundColor: "#5358E6",
        height: 40,
        borderRadius: 10
    },
    textButtonInicio:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',

    }
})