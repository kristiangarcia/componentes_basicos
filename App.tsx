import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <View style={styles.contenedorPrincipal}>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    padding: 20,
    backgroundColor: '#f5f3f3ff',
    width: '100%',
    height: '100%'
  }
})