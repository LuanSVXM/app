import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
export default function tela2() {
    const [dados, setdados] = useState('')
    const [mostrar, setmostrar] = useState();
    async function pegar() {
        let pegar = await AsyncStorage.getItem('categoria');
        let verificar = await JSON.parse(pegar);
        if(verificar != null && verificar != undefined) {
            setdados(verificar);
        }
    }
    if(dados === '') {
        pegar()
    }else if(mostrar === undefined){
        function icone() {
            let url =dados.element.url; 
            return(
                <View style={style.categoria_icones}>
                <View>
                    <Image 
                    style={style.categoria_img}
                    resizeMode="cover"
                    source={{
                        uri: url
                    }}
                    ></Image>
                </View>
               </View>
            )
        }
        setmostrar(icone())
    }
    return (
        <SafeAreaView style={style.safe}>
        <View style={style.header}></View>
        <View style={style.header_icon}>
        <View style={style.coraçoes}>
          <Image  
          style={style.imgcoraçoes}
          source={require('../css/coraçao.png')}></Image>
          <Image  
          style={style.imgcoraçoes}
          source={require('../css/coraçao.png')}></Image>
          <Image  
          style={style.imgcoraçoes}
          source={require('../css/coraçao.png')}></Image>
        </View>
        <View>{mostrar}</View>
        </View>
             </SafeAreaView>
    )
}


const style = StyleSheet.create({
    header_icon: {
         width: '85%',
         height: 100,
         display: 'flex',
         flexWrap: 'wrap'
    },
    iconame:{
        fontSize: 40,
        backgroundColor: '#31f5f5',
        width: '100%',
        height:'100%',
        textAlign: 'center',
        borderRadius: 80,
        paddingTop: 25,
        color: 'white'
    },
    containercategoria: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        width: 280, 
    },
    categoria_img: {
        marginTop: -20,
        marginRight: 65,
        width: 60,
        height: 60,
        borderRadius: 80,
    },
    categoria: {
           width: 280, 
           display: 'flex',
           flexWrap: 'wrap',
           borderWidth: 0,
           flexDirection: 'row',
    },
    categoria_nome:{
    color: '#00537A',
     fontSize: 19,
     fontWeight: 'bold',
     textAlign: 'center',
    },
    categoria_icones:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 90,

    },
    coraçoes: {
        width: '35%',
        display: 'flex',
        height: 40,
        marginRight: '55%',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    header: {
        width: '100%',
        height: 45, 
        backgroundColor: '#8ECAE6',
    },
      btnentrar: {
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         width: 250, 
         height: 50,
         borderWidth: 1,
         borderColor: 'red',
         borderRadius: 15,
         backgroundColor: '#8ECAE6',     
      },
      test: {
          marginTop: 50,
      },
      safe: {
        width: '100%',
        height: '100%',
        marginTop: 20,
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    textalert: {
        fontSize: 18,
        marginBottom: 5,
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold',
    },
    containerimg: {
        top: '85%',
        left: '0%',
        position: 'absolute',
        zIndex: -1,   
        borderColor: '#FFB703',
        margin: 0,
        
    },
    limit: {
        width: '100%',
        height: '10%',
        borderBottomWidth:1,
        borderColor: '#FFB703',
    },
})


