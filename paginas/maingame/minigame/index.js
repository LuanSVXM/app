import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';


export default function minigame() {
    return ( 
   <SafeAreaView style={style.safe}>
        <View>
            <Text style={style.textalert}>minigame</Text>
            <TouchableOpacity style={style.btnentrar}><Text>Sair</Text></TouchableOpacity>
        </View>

        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    btnentrar: {
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       width: 250, 
       height: 50,
       borderWidth: 1,
       borderColor: 'red',
       borderRadius: 15,
       backgroundColor: '#f5511b',     
    },
    test: {
        marginTop: 50,
    },
    safe: {
      marginTop: 20,
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  },
  textalert: {
      fontSize: 18,
      marginBottom: 5,
      textAlign: 'center',
      color: 'red',
      fontWeight: 'bold',
  }
})