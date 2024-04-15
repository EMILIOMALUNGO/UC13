import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import { useNavigation } from '@react-navigation/native' 
export default function Dashboard() {

    const navigation = useNavigation()

    function handleInicio(){
        navigation.navigate('Inicio')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.textoTitulo}>Tela de Dashboard</Text>
                <TouchableOpacity
                    style={styles.buttonInicio}
                    onPress={handleInicio}
                >
                    <Text style={styles.textButtonInicio}>Início</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    textoTitulo: {
        marginTop: 30,
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
    textButtonInicio: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',

    }
})