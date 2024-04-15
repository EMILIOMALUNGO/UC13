import { useState } from 'react'
import { Camera, CameraType } from 'expo-camera'
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

export default function App() {

  const [type, setType] = useState(CameraType.back)
  const [permission, requestPermission] = Camera.useCameraPermissions()

  if (!permission) {
    return <View />
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>Precisamos da sua permissão para mostrar a câmera</Text>
        <Button onPress={requestPermission} title='Solicitar Permissão' />
      </View>
    )
  }

  function toogleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back))
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <StatusBar backgroundColor='#000000' barStyle='light-content' translucent={false} />
          <TouchableOpacity style={styles.button} onPress={toogleCameraType}>
            <Text style={styles.text}>Mudar Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

