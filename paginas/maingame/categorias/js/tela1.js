import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
export default function tela1(props) {
    async function guardar(a) {
        let agora = JSON.stringify(a);
        let guardar= await AsyncStorage.setItem('categoria', agora)
    }
    async function pegar() {
        let pegar = await AsyncStorage.getItem('categoria');
        let verificar = await JSON.parse(pegar);
        if(verificar != null && verificar != undefined) {
            props.navigation.navigate('tela2')
        }
    }
    function teste(a){
       guardar(a);
       pegar()
    }
    const [teste2, setTeste]= useState('a');
    const [categorias, setcategorias] = useState('');
    const [lista2, setlista] = useState();
    async function pegar_categorias() {
        const response = await fetch('http://192.168.1.104:3000/categorias_feitas', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
      });
      let teste = await response.json()
       setcategorias(teste);
    }
    function lista() {
        return categorias.map((element) => {
          return (
              <TouchableOpacity key={element.id} onPress={() => teste({element})}>
            <View style={style.categoria_icones}>
          <View>
             <Image 
             style={style.categoria_img}
             resizeMode="cover"
             source={{
                 uri: element.url
             }}
             ></Image>
         </View> 
         <Text style={style.categoria_nome}>{element.nome}</Text> 
        </View>
        </TouchableOpacity>
          );
        });
      };
      if(categorias === ''){
          console.log('oi mundo')
          pegar_categorias() 
      }
      if(lista2 === undefined && categorias != ''){
          console.log('entrou 2')
          setlista(lista())
      }
    return ( 
   <SafeAreaView style={style.safe}>
   <View style={style.header}></View>
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

        <ScrollView style={style.categoria} showsVerticalScrollIndicator={false} >
        <View style={style.containercategoria}>
        {lista2}
        </View>
        </ScrollView>
        <View style={style.limit}></View>
      <Image source={require('../css/human.png')} style={style.containerimg}></Image>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
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
        width: 90,
        height: 90,
        borderColor: 'red',
        borderWidth: 0,
        borderRadius: 80,
        marginBottom: 0,
        marginTop: -20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
        paddingTop: 25,
        width: 125,
        height: 150,
        borderWidth: 0,
        marginTop: 20,
        marginBottom:10
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


