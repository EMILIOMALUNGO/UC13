import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Cadastro from "../Pages/Cadastro";
import Carrinho from "../Pages/Carrinho";
import ItemDaLista from "../Pages/ItemDaLista";
import Carrinho2 from "../Pages/Carrinho2";

const Stack = createNativeStackNavigator();




export default function Routes(){
    
return(
      
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login}  options={{ headerShown: false}}/>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false}} />
            <Stack.Screen name="Carrinho" component={Carrinho}  options={{ headerShown: false}}/>  
            <Stack.Screen name="Carrinho2" component={Carrinho2}  options={{ headerShown: false}}/>  
            <Stack.Screen name="Cadastro" component={Cadastro}  options={{ headerShown: false}}/>
           <Stack.Screen name="ItemDaLista" component={ItemDaLista}  options={{ headerShown: false}}/>
        </Stack.Navigator>

)}
