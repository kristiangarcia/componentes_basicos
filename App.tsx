import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

export default function App() {
  return (
    <View style={styles.contenedorPrincipal}>
      <Image
        source={require("./assets/registrar.jpg")}
        contentFit='fill'
        style={styles.logo}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    padding: 20,
    backgroundColor: '#f5f3f3ff',
    width: '100%',
    height: '100%'
  },
  logo: {
    width: '100%',
    height: 160,
  }
})