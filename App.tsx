import { Alert, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Picker } from '@react-native-picker/picker'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import {MaterialIcons} from "@expo/vector-icons"

export default function App() {
  return (
    <>
    {
      Platform.OS === 'web'?
      (
        <View>
          {getInteriorFormulario()}
        </View>
      ):
      (
        <SafeAreaView edges={['top', 'bottom']}>
          {getInteriorFormulario()}
        </SafeAreaView>
      )
    }
    </>
  )
}
function getInteriorFormulario() {
  function botonPulsado() {
    console.log('El botón ha sido pulsado')
  }
  function fabPulsado() {
    const mensaje = "Has pulsado el floating action button para compartir los datos del formulario. ¿Deseas continuar?"
    if(Platform.OS === 'web') {
      window.alert(mensaje)
    } else {
      Alert.alert(
        "FAB Pulsado!",
        mensaje,
        [
          {text: "Cancelar", onPress: () => console.log("Cancelar pulsado")},
          {text: "Aceptar", onPress: () => console.log("Aceptar pulsado")}
        ]
      )
    }
  }
  return (
    <>
      <ScrollView style={styles.contenedorPrincipal}>
        <Image
          source={require("./assets/registrar.jpg")}
          contentFit={Platform.OS === 'web'? 'fill':'cover'}
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
          <Pressable
            onPress={botonPulsado}
            style={ ({pressed}) => pressed? styles.botonPulsado: styles.boton }
          >
            <Text style={styles.textoBoton}>Registrar</Text>
          </Pressable>
          <Text style={styles.parrafo}>
            {Platform.OS === 'web'?'Esta web':'Esta app'} ha sido desarrollada para el
            módulo de desarrollo de dispositivos móviles de 2º dam del IES HLanz de Granada.
          </Text>
        </View>
      </ScrollView>
      <Pressable
        style={({pressed}) => pressed? styles.fabPulsado: styles.fab}
        onPress={fabPulsado}
      >
        <MaterialIcons name="share" style={styles.textoFab} />
      </Pressable>
    </>
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
    marginBottom: 64,
    marginHorizontal: 16,
    width: 'auto',
    height: 'auto'
  },
  logo: {
    width: '100%',
    height: Platform.OS === 'web'? 360: 160
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
  },
  boton: {
    marginTop: 24,
    paddingVertical: 16,
    width: 150,
    height: 'auto',
    backgroundColor: '#e45151ff',
    borderRadius: 25
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    margin: 'auto'
  },
  botonPulsado: {
    marginTop: 24,
    paddingVertical: 16,
    width: 150,
    backgroundColor: '#c13b3b',
    borderRadius: 25,
    transform: [{ scale: 0.97 }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  fab: {
    position: 'absolute',
    bottom: 40,
    right: 30,
    backgroundColor: 'orange',
    borderRadius: '50%',
    width: 56,
    height: 56,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7
  },
  fabPulsado: {
    position: 'absolute',
    bottom: 40,
    right: 30,
    backgroundColor: '#cc7000',
    borderRadius: 28,
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ scale: 0.94 }],
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4
  },
  textoFab: {
    margin: 'auto',
    fontSize: 24,
    color: 'white'
  }
})