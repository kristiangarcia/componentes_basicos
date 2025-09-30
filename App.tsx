import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaView edges={['top', 'bottom']}>
    <View style={styles.contenedorPrincipal}>
      <Image
        source={require("./assets/registrar.jpg")}
        contentFit='fill'
        style={styles.logo}
        />
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    backgroundColor: '#f5f3f3ff',
    width: '100%',
    height: '100%'
  },
  logo: {
    width: '100%',
    height: 160,
  }
})