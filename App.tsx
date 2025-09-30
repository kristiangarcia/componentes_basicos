import { StyleSheet, Text, TextInput, View } from 'react-native'
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
      <View style={styles.contenedorSecundario}>
        <TextInput
          placeholder={'Nombre'}
          maxLength={100}
          style={styles.cuadroTexto}
        />
        <TextInput
          placeholder={'Apellidos'}
          maxLength={100}
          style={styles.cuadroTexto}
        />
        <TextInput
          placeholder={'Teléfono'}
          maxLength={9}
          keyboardType='numeric'
          style={styles.cuadroTexto}
        />
        <TextInput
          placeholder={'Correo electrónico'}
          keyboardType='email-address'
          style={styles.cuadroTexto}
        />
        <TextInput
          placeholder={'Contraseña'}
          maxLength={12}
          secureTextEntry={true}
          style={styles.cuadroTexto}
        />
        <TextInput
          placeholder={'Observaciones'}
          maxLength={100}
          multiline={true}
          numberOfLines={5}
          style={styles.cuadroTexto}
        />
      </View>
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
  contenedorSecundario: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: 16,
    marginHorizontal: 16,
    width: 'auto',
    height: 'auto'
  },
  logo: {
    width: '100%',
    height: 160,
  },
  cuadroTexto: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderStyle: 'solid',
    borderColor: '#e7e5e5ff',
    borderWidth: 1,
    borderRadius: 8,
    width: 'auto',
    marginBottom: 16
  }
})