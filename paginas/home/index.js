import React from 'react';
import {Text, View, Image,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Estilos} from './css/css.js'
export default function Home(props) {
  async function getUser() {
    let resposta = await AsyncStorage.getItem('userData')
    let resposta2 = JSON.parse(resposta)
    if(resposta2 === null) {
        props.navigation.navigate('Home');
    }else { 
      props.navigation.navigate('maingame');}
}
getUser()

   return (
    <View style={Estilos.container}>
      <Image source={require('./css/imgs/logo.png')} style={Estilos.posicao}></Image>
      <Text style={Estilos.texto}>Este aplicativo tem como objetivo  te auxiliar nos estudos da escrita na Língua Portuguesa e incentivar a leitura</Text>
      <TouchableOpacity style={Estilos.butao} onPress={() =>props.navigation.navigate('cadastro')}>
        <Text style={Estilos.btntext}>Cadastre-se</Text>
      </TouchableOpacity>
      <View style={Estilos.teste}>
      <Text style={Estilos.pergunta}>Já tem uma conta?</Text>
      <TouchableOpacity><Text style={Estilos.entrar} onPress={() =>props.navigation.navigate('login')}>Entrar</Text></TouchableOpacity>
      </View>
    </View>
  );
}
