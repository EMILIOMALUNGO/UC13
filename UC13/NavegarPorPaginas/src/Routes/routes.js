import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";





import Inicio from '../Pages/Inicio';
import Cliente from  '../Pages/Cliente';
import Usuario from '../Pages/Usuario';


const Stack = createNativeStackNavigator()

export default function Routes(){


    return(
       <Stack.Navigator>
         <Stack.Screen  name='Inicio' component={Inicio } />
         <Stack.Screen  name='Cliente' component={Cliente } />
         <Stack.Screen  name='Usuario' component={Usuario } />
      

       </Stack.Navigator>
    )
}