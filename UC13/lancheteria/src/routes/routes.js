import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Inicio from '../pages/Inicio'
import Dashboard from '../pages/Dashboard'

const Stack = createNativeStackNavigator()


export default function AppRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Inicio'
            component={Inicio}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name='Dashboard'
            component={Dashboard}
            options={{ headerShown: false}}
            />
        </Stack.Navigator>

    )
}