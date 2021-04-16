import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function rank_geral() {
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
         <Text style={style.titulo1}>Ranking</Text>
         <View style={style.contrank}>
            <View style={style.listrank}>
                <Text style={style.position}>1</Text>
                <View style={style.espacamento}>
                <Text style={style.nome}>Amanda</Text>
                <Text style={style.pontosnumeros}>99070</Text>
                </View>
            </View>
            <View style={style.listrank}>
                <Text style={style.position}>2</Text>
                <View style={style.espacamento}>
                <Text style={style.nome}>Matheus</Text>
                <Text style={style.pontosnumeros}>78900</Text>
                </View>
            </View>
            <View style={style.listrank}>
                <Text style={style.position}>3</Text>
                <View style={style.espacamento}>
                <Text style={style.nome}>Lara</Text>
                <Text style={style.pontosnumeros}>66920</Text>
                </View>
            </View>
            <View style={style.pontinhos} >
            <View style={style.inativo1}></View>
            <View style={style.inativo1}></View>
            <View style={style.inativo1}></View>
            </View>
            <View style={style.listrank2}>
                <Text style={style.position}>19</Text>
                <View style={style.espacamento}>
                <Text style={style.nome}>{nome}</Text>
                <Text style={style.pontosnumeros}>66920</Text>
                </View>
            </View>

         </View>
         <View style={style.indicator}>  
         <View style={style.inativo}></View>
         <View style={style.ativo}></View>
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
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20,
        width: '85%',
        height: '75%',
        borderRadius: 18
    },
    position: {
        color: '#00537A',
        fontSize: 25,
        fontWeight: 'bold',
        width: 30,
        borderRightWidth: 1,
        borderRightColor: '#00537A',
        marginRight: 10,
    },
    nome: {
        marginLeft: 10,
        color: 'rgba(0, 0, 0, 0.7)',
        fontSize: 18,
        fontWeight: 'bold',
    },
    linhapontos: {
        marginTop: 35,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%'    
    },
    pontos: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',

    },
    pontosnumeros: {
        color: '#00537A',
        marginTop: 3,
        fontSize: 15,
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
        color: 'black',     
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
     },
     listrank: {
         marginTop: 5,
         marginBottom: 10, 
         flexDirection: 'row',
         alignItems: 'center',
         width: '100%',
         height:  70,
         borderRadius: 20,
         paddingLeft: 15,
         paddingRight: 15,
         backgroundColor: 'rgba(142, 202, 230, 0.3)'   
    },
    listrank2: {
        marginTop: 5,
        marginBottom: 10, 
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height:  70,
        borderColor: '#FB8500',
        borderWidth: 3,
        borderRadius: 20,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'rgba(142, 202, 230, 0.3)'   
   },
    espacamento: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 210
    }, 
    pontinhos: {
        justifyContent: 'center',
        display: 'flex' ,
        flexDirection: 'row',
    },
    inativo1:{ 
        margin: 5,
       width: 7,
       height: 7,
       borderWidth: 1,
       borderColor: '#00537A',
       backgroundColor: '#00537A',
       borderRadius: 80 
     },

})
