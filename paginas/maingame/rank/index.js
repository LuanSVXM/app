import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import rank_geral from './js/rank_geral'
import usuario_rank from './js/usuario_rank'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


export default function rank() {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator tabBar={() => null}>
          <Tab.Screen name="Rank" component={usuario_rank} />
          <Tab.Screen name="Rank Geral" component={rank_geral}/>
        </Tab.Navigator>
      );
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
/*
const [usuario, setusuario] = useState('');
    const [nome, setnome] = useState('');
    const [email, setemail] = useState(''); 
        async function getUser() {
            let resposta = await AsyncStorage.getItem('userData')
            let resposta2 = JSON.parse(resposta)
            if(resposta2 === null) {
                props.navigation.navigate('Home');
            }else {
            setusuario(resposta2.usuario)
            setnome(resposta2.nome)
            setemail(resposta2.email)
        }
        }
        getUser()
    return ( 
   <SafeAreaView style={style.safe}>
        <View>
            <Text style={style.textalert}>Rank do {usuario}, nome real: {nome}, email de vd: {email}  </Text>
        </View>

        </SafeAreaView>*/