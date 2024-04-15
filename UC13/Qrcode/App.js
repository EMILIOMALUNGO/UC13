import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


import {useState } from 'react';
import QRCode from 'react-native-qrcode-svg';

export default function App() {
  const [textoEntrada, setTextoEntrada]= useState('')
  const [qrvalor, setQrvalor] = useState('')
  const [terValor, setTervalor] = useState(false)
  
  function handleGerar(){
    setQrvalor(textoEntrada)
    setTervalor(true)
    setTextoEntrada('')
    Keyboard.dismiss()
    
  }

  function handleLimpar(){
    setTervalor(false)
    setQrvalor('')
    setTextoEntrada('')
    Keyboard.dismiss('')
  }


  return (
    <View style={styles.container}>
      <StatusBar  backgroundColor='#000000' rStyle='light-content' translucent={false} />
      <Text style={styles.tituloTexto}>Criar de QRCode</Text>
      
     {qrvalor.length > 0 && ( <QRCode 
      value={qrvalor ? qrvalor: 'NA'}
      size={200}
      color='#000'
      backgroundColor='#FFF'/>)}
      <TextInput style={styles.entradaDados} placeholder='Digita o valor' value={textoEntrada} onChangeText={setTextoEntrada}/>

      <TouchableOpacity  disabled={terValor === true} onPress={handleGerar} style={styles.buttonGerar}>
        <Text style={[styles.textoGerar, {opacity: terValor === true? 0.3 : 1 }]}>Gerar QRCode</Text>
      </TouchableOpacity>

      <TouchableOpacity disabled={terValor === false} onPress={handleLimpar} style={styles.buttonLimpar}>
        <Text style={[styles.textoLimpar, {opacity: terValor === false ? 0.3 : 1}]}>Limpar QRCode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloTexto: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: 'bold'
  },
  entradaDados: {
    marginTop: 30,
    borderWidth: 1,
    height: 40,
    width: '70%',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 10
  },
  buttonGerar: {
    backgroundColor: '#005CFF',
    marginTop: 20,
    height: 45,
    width: '70%',
    borderRadius: 10,
  },
  textoGerar: {
    textAlign: 'center',
    padding: 6.25,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  buttonLimpar: {
    backgroundColor: '#DB063E',
    marginTop: 20,
    height: 45,
    width: '70%',
    borderRadius: 10,
  },
  textoLimpar: {
    textAlign: 'center',
    padding: 6.25,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
});