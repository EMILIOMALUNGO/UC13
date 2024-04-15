import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login from "../src/pages/Login";
import Dashboard from "../src/pages/DashBoard";

const Stack = createNativeStackNavigator();

export default function Routes(){
    
return(
      
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dashboard" component={Dashboard}  options={{ headerShown: false}}/>
        </Stack.Navigator>
   
)
}