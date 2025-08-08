import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"; 
import ImagemInicial from '../assets/casual_dog.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={ImagemInicial}
        style={styles.imagem}
      />

      <Text style={{fontSize: 40, padding: 10}}>Ótima dia!</Text>

      <Text>Como deseja acessar?</Text>

      <TouchableOpacity>
        <Image />
        <Text>Como deseja acessar?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>Outras opções</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },

  imagem: {
    width: 360,
    height: 290
  }
});