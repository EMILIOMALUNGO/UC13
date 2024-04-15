import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/Routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
 
export default function App() {
  return (
    <NavigationContainer>
 
        <Routes />
       
        <ToastContainer />
    </NavigationContainer>
  );
}

 
 

