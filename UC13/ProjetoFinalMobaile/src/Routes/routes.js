import React from "react";
import {Text,View,StyleSheet} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon  from "@expo/vector-icons/AntDesign";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Inicio from "../Pages/Inicio/Index";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";
import RecuperarSenha from "../Pages/RecuperarSenha";
import DashBoard from "../Pages/DashBoard";
import Pagamento from "../Pages/Pagamento";
import Administrador from "../Pages/Administrador";
import DashAdministrador from "../Pages/DashAdministrador";
import GrupoA from "../Pages/Grupos/GrupoA";




import AtividadeReuniao from "../Pages/Atividades/AtividadeReuniao";
import AtividadeVagas from "../Pages/Atividades/AtividadeVagas";
import GradedasUcs from "../Pages/Atividades/GradedasUcs";
import NotasAlunos from "../Pages/Atividades/NotasAlunos";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

 function Tabs(){

    return(
        <Tab.Navigator tabBarOptions={{style:{backgroundColor:"#000"}}}  >

          <Tab.Screen name="DashBoard" component={DashBoard}  options={{ headerShown: false,tabBarLabel: 'Solicitações',backgroundColor:'#000',
           tabBarIcon: ({color, size})=> (<Icon name="bars" size={30} color={"#662828"}/>),}}  />

          <Tab.Screen name="Administrador" component={Administrador}  options={{ headerShown: false,tabBarLabel: 'Adm' ,backgroundColor:'#000',
           tabBarIcon: ({color, size}) => (<AntDesign name="team" size={24} color="#662828" />),}} />
           
           <Tab.Screen name="Pagamento" component={Pagamento}  options={{headerShown: false,tabBarLabel: 'Pagar',backgroundColor:'#000',
           tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="wallet-outline" size={30} color="#662828" />),}}
            />
          
        </Tab.Navigator>   
        
    )
}


export default function Routes (){
 
    return(
  
     <Stack.Navigator>
          <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />
             <Stack.Screen name="Cadastro" component={Cadastro}options={{ headerShown: false}} />
             <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{ headerShown: false}}/>
             <Stack.Screen name="DashAdministrador" component={DashAdministrador} options={{ headerShown: false}}/>
             <Stack.Screen name="GrupoA" component={GrupoA} options={{ headerShown: false}}/>
             
             
 
    
             <Stack.Screen name="AtividadeReuniao" component={AtividadeReuniao} options={{ headerShown: false}}/>
             <Stack.Screen name="AtividadeVagas" component={AtividadeVagas} options={{ headerShown: false}}/>
             <Stack.Screen name="GradedasUcs" component={GradedasUcs} options={{ headerShown: false}}/>
             <Stack.Screen name="NotasAlunos" component={NotasAlunos} options={{ headerShown: false}}/>
           
             <Tab.Screen
             name="DashBoard" 
             component={Tabs} options={{ headerShown: false}}/>
   </Stack.Navigator>

    )
}
const styles = StyleSheet.create({
   container:{
    flex:1,
    backgroundColor:'#484466'
   },

  Tabs: {
    flex:1,
    backgroundColor:'#484466'
  },
})