import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { StyleSheet,TouchableOpacity, Text, View, TextInput } from 'react-native';





export default function Cadastro(){
    const navigation = useNavigation()

    const [nome,setNome]= useState("")
    const [email,setEmail]= useState("")
    const [cpf_cnpj,setCpf_cnpj]= useState("")
    const [rg_ie,setRg_ie]= useState("")
    const [celular,setCelular]= useState("")
    const [rua,setRua]= useState("")
    const [bairro,setBairro]= useState("")
    const [complemento,setComplemento]= useState("")
    const [cidade,setCidade]= useState("")
    const [estado,setEstado]= useState("")
    const [password,setPassword]= useState("")
    const [amazenar, setArmazenar] = useState('')
  
    async function handleCadastrarCliente(){
       
        if (!nome||!email ||!cpf_cnpj ||!rg_ie ||!celular ||!rua ||!complemento ||!bairro ||!cidade ||!estado ||!password) {
            alert('preencha os campos vasios')
            return
         }
         try{
            const resposta = await post('/criarCliente',{
                nome,email,cpf_cnpj,rg_ie,celular,rua,complemento,bairro,cidade,estado, password
            })
          
            setNome("")
            setEmail("")
            setCpf_cnpj("")
            setRg_ie("")
            setCelular("")
            setRua('')
            setComplemento("")
            setBairro("")
            setCidade("")
            setEstado("")
            setPassword("")
        }catch(error){
            alert(error.response.data.error)
            return
        }   
    }

     

    return(
        <View>
            <View>
            <Text>Faça aqui o seu Cadastro</Text>
            </View>

            <View>
            <TextInput placeholder="Digita o seu Nome" value={nome} onChangeText={setNome}/>
            </View>
            <View>
            <TextInput placeholder="Digita o seu Email" value={email} onChangeText={setEmail}/>
            </View>
            <View>
            <TextInput placeholder="Digita o seu Cpf/Cnpj" value={cpf_cnpj} onChangeText={setCpf_cnpj}/>
            </View>
            <View>
            <TextInput placeholder="Digita o seu RG/IE" value={rg_ie} onChangeText={setRg_ie}/>
            </View>
            <View>
            <TextInput placeholder="Digita o seu Celular" value={celular} onChangeText={setCelular}/>
            </View>
            <View>
            <TextInput placeholder="Digita o seu Rua" value={rua} onChangeText={setRua}/>
            </View>
            <View>
            <TextInput placeholder="Digita o seu Bairro" value={bairro} onChangeText={setBairro}/>
            </View>
            <View>
            <TextInput placeholder="Digita o seu Complemento" value={complemento} onChangeText={setComplemento}/>
            </View>
            <View>
            <TextInput placeholder="Digita o seu Cidade" value={cidade} onChangeText={setCidade}/>
            </View>
            <View>
            <TextInput placeholder="Digita o seu Estado" value={estado} onChangeText={setEstado}/>
            </View>
            <View>
            <TextInput placeholder="Digita o seu password" value={password} onChangeText={setPassword}/>
            </View>
            <TouchableOpacity onPress={handleCadastrarCliente}>
                <Text>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity  onPress={() => navigation.navigate("Login")}>
                <Text>voltar para Tela inicial</Text>
            </TouchableOpacity>
            
        </View>
    )
}

