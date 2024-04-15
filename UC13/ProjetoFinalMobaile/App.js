import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

import Routes from './src/Routes/routes';

export default function App() {
  return (
    <NavigationContainer>
  <StatusBar  style={styles.container11}   />
    <Routes />
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container11: {
     flex:1,
  },

})
