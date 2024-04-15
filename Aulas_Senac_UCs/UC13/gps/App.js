import React, { useState, useEffect, useRef } from 'react'
import { useKeepAwake } from 'expo-keep-awake'
import {
  StyleSheet,
  StatusBar,
  View,
  Image
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  LocationAccuracy
} from 'expo-location'

export default function App() {
  useKeepAwake()

  const [localizacao, setLocalizacao] = useState(null)

  const mapaRef = useRef(MapView)

  useEffect(() => {
    async function requisitarLocal() {
      const { granted } = await requestForegroundPermissionsAsync()
      if (granted) {
        const positionAtual = await getCurrentPositionAsync()
        setLocalizacao(positionAtual)
      }
    }
    requisitarLocal()
  }, [])

  useEffect(() => {
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    }, (resposta) => {
      setLocalizacao(resposta)
      mapaRef.current.animateCamera({
        pitch: 70,
        center: resposta.coords
      })
    })
  }, [])
  console.log('Latitude: ' , localizacao.coords.latitude)
  console.log('Longitude: ' , localizacao.coords.longitude)


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#D9900F' barStyle='light-content' translucent={false} />

      {
        localizacao &&
        <MapView
          ref={mapaRef}
          style={styles.mapview}
          loadingEnabled={true}
          initialRegion={{
            latitude: localizacao.coords.latitude,
            longitude: localizacao.coords.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003
          }}
        >
          <Marker
            coordinate={{
              latitude: localizacao.coords.latitude,
              longitude: localizacao.coords.longitude
            }}
          >
            <Image
              style={styles.iconMarker}
              source={require('./assets/capacete.png')}
            />
          </Marker>
        </MapView>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textAG: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'red',
  },
  mapview: {
    height: '100%',
    width: '100%'
  },
  iconMarker: {
    height: 25,
    width: 25,
    resizeMode: 'contain'
  }
})


