import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView, } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect,useState } from "react";
import {Picker} from '@react-native-picker/picker';

import apiCliente from "../../API/apiCliente"



export default function Cadastro() {
   // const navigation = useNavigation()

    //essa parte é da categoria 
    const [nomes, setNomes] = useState('')
    const [categorias1, setCategorias1]= useState("")
  //termina aqui
  //essa parte é do produto 
  const [categorias, setCategorias] = useState([''])   
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')
  const [enviar, setEnviar] = useState('')
  

  

  const [idcategoria, setIdCategoria] = useState([""])

  
  
    
    async function EndCategoria1(){
        
        if (!nomes) {      
           alert("existem campos vazios")  
           return     
        }
        const response = await apiCliente.post('/CriarCategorias',{
            nomes
        })
        setCategorias1(response.data)

        if (response) {
            alert('uma categoria foi cadastrado')
             setNomes("")
             return
        }
        
    }
    useEffect(()=>{    
    EndCategoria1() 
    },[ ])

  
    //essa parte sao todos os teste que agente fez pra ver se estão funcionando 
    //console.log(nome,fabricante,quantidade,preco)
    //  console.log(idcategoria)
    // console.log(imagem)
     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

    async function hancadastrar(e) {
    e.preventDefault()
    
    if (!nome || !email ||!password ) {
        alert('Preencham os campos vazios')
        return
    } 
    if (!emailPattern.test(email)) {
       alert('O e-mail inserido é válido.');
     }
      if (password.trim().length < 8) {
        alert("A senha precisa ter no minimo 8 caracteris")
    }
   
    try {
        
        const categoriaId = idcategoria
    
        const response = await apiCliente.post('/CriarUsuarios',{
            nome,email,password,categoriaId 
        } )
       //console.log(response)
       alert(response.data.dados)
       window.location.reload()

    } catch (err) {
        //console.log(err)

    }
    //setNome('')
    //setEmail('')
    //setPassword('')     
}
 useEffect(()=>{
    hancadastrar() 
 },[])


    async function BuscarCategotia(){
        const response =  await apiCliente.get("/ListarCategorias")
        setCategorias(response.data)
        //console.log(response.data)
        return
    }   
BuscarCategotia()

   
//console.log(categorias)
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.contai1}>

                <View style={styles.contai2}>
                <Text style={styles.contai3}>Categorias</Text>
                </View>

                <View style={styles.contai4}>

                <View >
                    <TextInput style={styles.contai5} placeholder='Digita a categoria'
                    value={nomes} onChangeText={setNomes}/>
                </View>
                <View style={styles.contai6}>
                    <TouchableOpacity onPress={EndCategoria1}>
                        <Text style={styles.buton}>Cadastro</Text>
                    </TouchableOpacity>
                </View>


                </View>
            </View>
             
       


            <View style={styles.container11}>

                 <View>
                <Text  style={styles.testo}>Faça o seu Cadastro</Text>
                 </View>
               
               <View>
                 <Picker
                    selectedValue={idcategoria}
                    onValueChange={(itemValue,itemIndex) =>
                          setIdCategoria(itemValue)}>
                            
                       <option>Selecione...</option>

                    {  
                            categorias.map((pegar,index)=>{
                                //console.log(pegar)
                               return(
                            
                                <Picker.Item  label={pegar.nomes} value={pegar.id} key={pegar.id} />
                                              
                               ) 
                            })
                    }

                 </Picker>
                 </View>
                 
                 
                 
              
                
                <View style={styles.container12}> 
                

                <View style={styles.testo1}>
                    <TextInput placeholder="Digita seu nome completo" placeholderTextColor='#fff' style={styles.input}
                    value={nome} onChangeText={setNome}/>
                </View >
                <View style={styles.testo1}>
                    <TextInput placeholder="Digita  seu Email" placeholderTextColor='#fff' style={styles.input} 
                    value={email} onChangeText={setEmail} />
                </View>
               
                          
                <View style={styles.testo1}>
                    <TextInput placeholder="Digita sua Senha " placeholderTextColor='#fff' style={styles.input}
                    value={password} onChangeText={setPassword} />
                </View>
                <View style={styles.buton}>
                    <TouchableOpacity onPress={hancadastrar}>
                        <Text style={styles.buton1}>Cadastro</Text>
                    </TouchableOpacity>
                </View>
                
                </View>
            
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {        
        backgroundColor: '#ffff',
        flex:1,
    },
    contai1:{
     marginTop:10,
    },
    container11:{     
        marginTop:20,
        marginStart:20,
        marginRight:20,
        backgroundColor:'#SAFA69',
        borderRadius:5,
        marginBottom:40
    },
    testo:{
      marginTop:20,
      fontSize:20,
      textAlign:'center',
      color:'#4A515E'
    },
    container12:{
        marginTop:20,
        marginStart:5,
        marginRight:5,
    },
    testo1:{
        padding:12,
        borderEndWidth:1,
        backgroundColor: "#3953E5",
        borderRadius:15,
        margin:5,
        
    },
    input:{
        color:'#FFFFFF',
        margin:5,
        fontSize:13,
    },
    buton:{
        marginStart:5,
        marginRight:5,
        fontSize: 15,
        padding: 15,
        borderWidth: 1,
        backgroundColor: "#342246",
        borderRadius: 3,
        color:"#fff",
     
    },buton1:{
        textAlign: "center",
        color: '#ffffff',
    },
    contai2:{
        padding:10,
        alignItems:'center',
        textAlign:'center',
    },
    contai3:{
        fontSize:20
    },
    contai4:{
        flexDirection:"row",     
        width:'100',
        gap:10,
        marginStart:30,
    },
    contai5:{
        borderColor:"#000",
        borderWidth:2,
        padding:11,
        width:250,
        
       
     
    }

})
