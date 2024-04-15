import React from "react";
import { useNavigation } from "@react-navigation/native";

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from "react";
import firebase from "../FireBaseConnet";
import { StyleSheet, TouchableOpacity, Text, View, StatusBar, TextInput } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location'


export default function ItemDaLista() {
    const navigation = useNavigation()
    const [latitudeFb, setLatituteFb] = useState('')
    const [longitudeFb, setLongitudeFb] = useState('')


    useEffect(() => {
        async function acompanhamentoPedido() {
            await firebase.database().ref('motoqueiros').on('value', (snapshot) => { //snapshot funcao anonima para armazenar os dados consultados (nome convencao)
                snapshot?.forEach((item) => { // loop para consultar os valores e armazena item
                    let data = { // armazena os dados colhidos
                        // dados: item.val() ve toda estrutura que ele esta no firebase, para mapear ex: data.dados.localizacao
                        key: item.key,
                        latitude: item.val().localizacao.latitude,   // primeiro nome eu crio, segundo valor firebase
                        longitude: item.val().localizacao.longitude
                    }
                    console.log(data)
                    setLatituteFb(data.latitude)
                    setLongitudeFb(data.longitude)
                    // setMotoqueiros(oldArray => [...oldArray, data])
                })
            })
        }
        acompanhamentoPedido()
    }, [])

    return (
        <View>
            <Text>Veja os meus item da lista</Text>
            <Text style={styles.Text}>O Motoqueiro esta cHegando com o seu pedido nesse enderço abaixo </Text>

            <View>
                <Text style={styles.text}>Latitute: {longitudeFb}</Text>
                <Text style={styles.text}>Longitude: {latitudeFb}</Text>
            </View>
        </View>
    )
}