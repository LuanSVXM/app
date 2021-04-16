import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function usuario_rank() {
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
    <SafeAreaView style={style.container}>
         <Text style={style.titulo1}>Seu Ranking</Text>
         <View style={style.contrank}>
        <Text style={style.position}>19</Text>
        <Text style={style.nome}> {nome}</Text>
        <View style={style.linhapontos}>
            <Text style={style.pontos}>Seus pontos:</Text>
            <Text style={style.pontosnumeros}>956</Text>
        </View>    
         <View style={style.controfe}>
            <Text style={style.textrofe}>Seus troféus:</Text>
            <ScrollView horizontal={true} style={style.scroll}>
              <View style={style.teste}></View>
              <View style={style.teste}></View>
              <View style={style.teste}></View>
              <View style={style.teste}></View>
              <View style={style.teste}></View>
              <View style={style.teste}></View>
            </ScrollView>
         </View>
         </View>
         <View style={style.indicator}>  
         <View style={style.ativo}></View>
         <View style={style.inativo}></View>
         </View>   
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex:1,
        marginTop: 20,
        alignItems: 'center'
    },
    titulo1: {
        color: '#00537A',
        fontSize: 33,
        fontWeight: 'bold',
        marginTop: '7%'
    },
    contrank: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20,
        backgroundColor: 'rgba(142, 202, 230, 0.3)',
        width: '85%',
        height: '75%',
        borderRadius: 18
    },
    position: {
        color: '#00537A',
        fontSize: 33,
        fontWeight: 'bold',
        marginTop: 25,
    },
    nome: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: -5
    },
    linhapontos: {
        marginTop: 35,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%'    
    },
    pontos: {
        color: 'rgba(0, 0, 0, 0.7)',
        fontSize: 20,
        fontWeight: 'bold',

    },
    pontosnumeros: {
        color: '#00537A',
        fontSize: 20,
        fontWeight: 'bold'
    },
    controfe: {
        marginTop: '18%',
        borderTopColor: '#00537A',
        borderTopWidth: 2,
    },
    textrofe:{
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',     
    },
    scroll: {
        marginTop: 5,
         height: 100,
         display: 'flex',
         flexDirection: 'row',
    },
    teste: {
        width: 80,
        height: 80,
        backgroundColor: 'red',
        margin: 10,
        borderRadius: 15,
    },
    indicator: {
        width: 150,
        height: 30, 
        marginBottom: -15,
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row'    
    },
    ativo:{
       marginTop: 5, 
      width: 15,
      height: 15,
      backgroundColor: '#FFB703',
      borderColor: '#FFB703',
      borderRadius: 80 
    },
    inativo:{
        marginTop: 5, 
       width: 15,
       height: 15,
       borderWidth: 3,
       borderColor: '#FFB703',
       borderRadius: 80 
     }

})
