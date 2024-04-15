import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";


export default function DashBoard() {

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container13}>
        <Text style={styles.testo2}>Sua programação diária você encontra aqui.</Text>
      </View>

    
      <View style={styles.container14} >

        <View style={styles.container15}>
          <TouchableOpacity onPress={() => navigation.navigate("GrupoA")}>
            <Text style={styles.testo3}>Grupo A</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container15}>
          <TouchableOpacity onPress={() => navigation.navigate("GrupoB")}>
            <Text style={styles.testo3}>Grupo B</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container15}>
          <TouchableOpacity onPress={() => navigation.navigate("GrupoC")}>
            <Text style={styles.testo3}>Grupo C</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container15}>
          <TouchableOpacity onPress={() => navigation.navigate("GrupoD")}>
            <Text style={styles.testo3}>Grupo D</Text>
          </TouchableOpacity>
        </View>
      </View>

   
      <View>
        <Text style={styles.testo4}>Veja algumas imagens dos nossos quadros</Text>
        <ScrollView horizontal>
          <View style={{ flexDirection: 'row' }}>

            <View style={styles.textImage}>
              <Image style={styles.Image} source={require("../../../assets/livro1.jpg")} />
            </View>
            <View style={styles.textImage}>
              <Image style={styles.Image} source={require("../../../assets/livros.jpg")} />
            </View>
            <View style={styles.textImage}>
              <Image style={styles.Image} source={require("../../../assets/caderno.jpg")} />
            </View>
            <View style={styles.textImage}>
              <Image style={styles.Image} source={require("../../../assets/subida.jpg")} />
            </View>
            <View style={styles.textImage}>
              <Image style={styles.Image} source={require("../../../assets/home.jpg")} />
            </View>

          </View>
        </ScrollView>
      </View>
      <ScrollView  >
      <View style={styles.container20}>

        <View style={styles.container21}>
          <Text style={styles.testo5}>Cada programação de forma Detalhada</Text>
        </View>

        <View>
          <View style={styles.container22}>

            <View style={styles.container23}>
              <TouchableOpacity onPress={() => navigation.navigate("GradedasUcs")}>
                <Text style={styles.testo5}>Grade{'\n'}das UCS</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container23}>
              <TouchableOpacity onPress={() => navigation.navigate("AnuncioFaltas")}>
                <Text style={styles.testo5}>Anúncio{'\n'}das faltas</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.container23}>
              <TouchableOpacity onPress={() => navigation.navigate("AtividadeMeses")}>
                <Text style={styles.testo5}>Atividade {'\n'}do mês</Text>
              </TouchableOpacity>
            </View>
          </View>

        <View style={styles.container24}>
            <View style={styles.container23}>
              <TouchableOpacity onPress={() => navigation.navigate("AtividadeVagas")}>
                <Text style={styles.testo5}>Atividade{'\n'}e Vagas</Text>
              </TouchableOpacity>
            </View>

            
            <View style={styles.container23}>
              <TouchableOpacity onPress={() => navigation.navigate("AtividadeReuniao")}>
                <Text style={styles.testo5}>Reunião{'\n'}</Text>
              </TouchableOpacity>
            </View>

            
            <View style={styles.container23}>
              <TouchableOpacity onPress={() => navigation.navigate("NotasAlunos")}>
                <Text style={styles.testo5}>Nota dos{'\n'}Alunos</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container20: {
    marginTop: 50,
    borderRadius: 15,
    marginStart: 10,
    marginRight: 10,
    backgroundColor: "#666459",
    marginBottom:20,
  },
  testo5: {
    color: "#000",
    fontSize: 20,
  },
  container22:{
    marginTop:25,
    margin:5,
    gap:5,
    flexDirection:'row',
    justifyContent:'center',
    
  },
  container23:{
    borderRadius: 15,
    padding:20,
    backgroundColor: '#808080',
  },
  container24:{
    marginTop:25,
    borderRadius:10,
    gap:5,
    justifyContent:'center',
flexDirection:'row',
marginBottom:20,
  },
  testo5:{
    marginTop:18,
    fontSize:15,
    textAlign: 'center',
    alignItems: 'center',
    color: '#f8f8ff',
  },
  
  container13: {
    marginTop: 40,
    width: '100%',
    padding: 30,

  },
  testo2: {
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ED212A',
  },
  container14: {
    width: '100%',
    flexDirection: "row",
    marginLeft: 'auto',
    gap: 4,

  },
  container15: {
    padding: 20,
    backgroundColor: '#000',
  },
  testo3: {
    textAlign: 'center',
    alignItems: 'center',
    color: '#ffffff',
  },

  testo4: {
    marginTop: 10,
    fontSize: 18,
    color:'#121212',
    textAlign: 'center',
    alignItems: 'center',
  },
  container16: {

  },
  text: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 30,
    color: '#D92938',
    fontWeight: 'bold',
    textAlign: "center",
  },
  Image: {
    width: "90%",
    height: 200,

  },
  textImage: {
    width: 130,
    height: 150,
    marginTop: 10,
    margin: 5

  },
  text1: {
    fontSize: 20,
    color: '#F5E50A',
    marginTop: 10,
    marginLeft: 20,
  },

});