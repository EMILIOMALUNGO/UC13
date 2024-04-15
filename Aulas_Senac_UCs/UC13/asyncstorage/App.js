import { useState } from 'react'
import apiLocal from './apiLocal'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'

export default function App() {

  const [nusuario, setNusuario] = useState('')
  const [password, setPassword] = useState('')
  const [respNome, setRespNome] = useState('')
  const [respToken, setRespToken] = useState('')

  async function handleLogin() {

    try {
      const resposta = await apiLocal.post('/LoginMotoqueiros', {
        nusuario,
        password
      })
      await AsyncStorage.setItem('@nome', JSON.stringify(resposta.data.nome))
      await AsyncStorage.setItem('@token', JSON.stringify(resposta.data.token))

    } catch (error) {
      console.log(error)
    }

  }

  async function handleAsyncNome() {
    const iNome = await AsyncStorage.getItem('@nome')
    const nome = JSON.parse(iNome)
    setRespToken('')
    setRespNome(nome)
  }

  async function handleAsyncToken() {
    const iToken = await AsyncStorage.getItem('@token')
    const token = JSON.parse(iToken)
    setRespNome('')
    setRespToken(token)
  }

  async function handleClearAsync(){
    await AsyncStorage.clear()
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Login Motoqueiro</Text>

      <TextInput
        style={styles.input}
        placeholderTextColor='#FFFFFF'
        placeholder='Digite Seu Usuário'
        value={nusuario}
        onChangeText={setNusuario}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor='#FFFFFF'
        placeholder='Digite Sua Senha'
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.buttonEnviar}>
        <Text style={styles.buttonEnviarText}>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAsyncNome} style={styles.buttonAsyncNome}>
        <Text style={styles.buttonEnviarText}>Async_Nome</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAsyncToken} style={styles.buttonAsyncToken}>
        <Text style={styles.buttonEnviarText}>Async_Token</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleClearAsync} style={styles.buttonAsyncClear}>
        <Text style={styles.buttonEnviarText}>Async_Clear</Text>
      </TouchableOpacity>
      <Text style={styles.textResposta}>{respNome}</Text>
      <Text>{respToken}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    color: '#FFFFFF',
    marginTop: 20,
    fontSize: 20,
    backgroundColor: '#000000',
    height: 45,
    width: '97%',
    borderRadius: 5,
    textAlign: 'center'
  },
  buttonEnviar: {
    marginTop: 30,
    backgroundColor: "#3A57FC",
    height: 45,
    width: '97%',
    borderRadius: 8,
  },
  buttonEnviarText: {
    textAlign: 'center',
    padding: 5,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  buttonAsyncNome: {
    marginTop: 30,
    backgroundColor: "#FC553A",
    height: 45,
    width: '97%',
    borderRadius: 8,
  },
  buttonAsyncToken: {
    marginTop: 30,
    backgroundColor: "#FF0023",
    height: 45,
    width: '97%',
    borderRadius: 8,
  },
  buttonAsyncClear: {
    marginTop: 30,
    backgroundColor: "#DB9107",
    height: 45,
    width: '97%',
    borderRadius: 8,
  },
  textResposta: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold'
  }
})
