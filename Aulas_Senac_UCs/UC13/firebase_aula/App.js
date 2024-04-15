import React, { useState, useEffect } from 'react'
import firebase from './FirebaseConnect'
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

console.disableYellowBox = false

export default function App() {

  //identificação do vendedor
  //const vendedor = 10

  const [nome, setNome] = useState('')
  const [cidade, setCidade] = useState('')
  const [vendedores, setVendedores] = useState([''])

  async function cadastroFB() {
    if (!nome || !cidade) {
      alert('Campos Vazios')
    }
    let usuarios = await firebase.database().ref('vendedores')
    let chave = usuarios.push().key

    usuarios.child(chave).set({
      nome: nome,
      cidade: cidade
    })
    setNome('')
    setCidade('')
    Keyboard.dismiss()
  }

  useEffect(() => {
    async function buscarVendedores() {
      await firebase.database().ref('vendedores').on('value', (snapshot) => {
        setVendedores([''])
        snapshot?.forEach((item) => {
          let data = {
            key: item.key,
            nome: item.val().nome,
            cidade: item.val().cidade
          }
          setVendedores(oldArray => [...oldArray, data])
        })
      })
    }
    buscarVendedores()
  }, [])

  async function handleDelete(key){

    await firebase.database().ref('vendedores').child(key).remove()
  }

  console.log(vendedores)


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#000000' barStyle={'default'} translucent={false} />
      <Text style={styles.textoTitulo}>Usando o Firebase</Text>

      <TextInput
        style={styles.inputFormulario}
        placeholder='Digite Seu Nome'
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.inputFormulario}
        placeholder='Digite Sua Cidade'
        value={cidade}
        onChangeText={setCidade}
      />
      <TouchableOpacity style={styles.botaoEnviar} onPress={cadastroFB}>
        <Text style={styles.textoBotao}>Enviar</Text>
      </TouchableOpacity>
      {vendedores.map((item) => {
        return (
          <View>
            {item.length !== 0 && (
              <>
                <Text>Nome: {item.nome}</Text>
                <Text>Cidade: {item.cidade}</Text>
                <TouchableOpacity onPress={() => handleDelete(item.key)}>
                  <Feather name='trash-2' size={30} />
                </TouchableOpacity>
              </>
            )}
          </View>
        )
      })}     

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  textoTitulo: {
    marginTop: 20,
    fontSize: 35,
    fontWeight: 'bold'
  },
  inputFormulario: {
    marginTop: 10,
    height: 50,
    width: '95%',
    fontSize: 20,
    padding: 7.5,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center'
  },
  botaoEnviar: {
    marginTop: 10,
    backgroundColor: '#005CFF',
    height: 50,
    width: '50%',
    borderRadius: 10
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 7.5
  }
});
