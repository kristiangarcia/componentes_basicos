import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

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
        <View style={styles.desplegable}>
          <Picker style={styles.picker} >
            <Picker.Item label="-- Nivel de estudios --" value="ne" />
            <Picker.Item label="Secundaria" value="eso" />
            <Picker.Item label="Bachillerato" value="bh" />
            <Picker.Item label="Ciclo de FP" value="fp" />
            <Picker.Item label="Universidad" value="uni" />
            <Picker.Item label="Sin estudios" value="nada" />
          </Picker>
        </View>
        <Text style={styles.parrafo}>
          Pulsando el siguiente botón, el usuario se hace responsable
          de hacer un uso correcto del portal, sin subir contenidos
          que supongan un incumplimiento de las leyes de protección
          de datos ni de la propiedad intelectual.
        </Text>
        <BouncyCheckbox
          size={16}
          fillColor={'red'}
          unFillColor={'white'}
          text={'He leído y acepto los términos'}
          textStyle={{textDecorationLine: 'none'}}
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
  },
  picker: {
    color: '#8c8c8c'
  },
  desplegable: {
    borderStyle: 'solid',
    borderColor: '#e7e5e5ff',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10
  },
  parrafo: {
    color: '#8c8c8c',
    marginVertical: 16
  }
})