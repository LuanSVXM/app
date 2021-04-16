import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

export default function login(props) {
    const [display2, setdisplay2] = useState('none');
    const [usertxt, setusertxt] = useState('');
    const [password, setpassword] = useState('');
    //envio de formulario de login
    async function sendForm(a) {
        const response = await fetch('http://192.168.1.104:3000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario: usertxt,
                senha: password,
            })
        });
        let teste = await response.json()
        if (teste == 'error') {
            await AsyncStorage.clear()
            let resposta = await AsyncStorage.getItem('userData');
            let verificar = await JSON.parse(resposta);
            console.log(verificar);
            setdisplay2('flex');
        } else {
            await AsyncStorage.clear()
            setdisplay2('none');
            let userData = await AsyncStorage.setItem('userData', JSON.stringify(teste))
            props.navigation.navigate('maingame');
        }
    }
    return (
        <SafeAreaView style={style.safe}>
        <View style={style.head}> 
        <Text style={style.titulo}>Login</Text>
        </View>

        <ScrollView style={style.formulario}>
        <View style={style.display}>
        <Text style = { style.texterror(display2) } > Usuario / email ou Senha Incorreta </Text> 
        <TextInput style={style.forminput1} placeholder="Username/Email" onEndEditing = { tex => setusertxt(tex.nativeEvent.text) } ></TextInput>
        <TextInput style={style.forminput} placeholder="Senha" secureTextEntry={true} onEndEditing = { tex => setpassword(tex.nativeEvent.text)}></TextInput>
        <TouchableOpacity style={style.btnentrar}  onPress = {  () =>sendForm(props)}><Text style={style.bnttext}>Começar a aprender</Text></TouchableOpacity>
        <View style={style.fromregistrar}>
            <Text style={style.contatxt}>Nao tem Conta?</Text>
        <TouchableOpacity><Text style={style.criartxt} onPress={() =>props.navigation.navigate('cadastro')}>Crie uma Aqui</Text></TouchableOpacity>
        </View>
        </View>
        <View>
        <Image source = {require('./css/img1.png')} style = { style.img }/> 
        </View>
        </ScrollView>
    </SafeAreaView>
    
    )
};
const style = StyleSheet.create({
    texterror: (text = 'none') => ({
        color: '#D53624',
        fontSize: 13,
        textAlign: 'center',
        display: text
    }),

    head: {
        height: 103,
        width: '100%',
        backgroundColor: '#8ECAE6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    safe: {
        marginTop: 20,
        flex: 1,
    },
    titulo: {
        color: '#00537A',
        fontWeight: 'bold',
        fontSize: 28,
        marginRight: '45%'
    },
    formulario: {
        width: '100%',
        height: '100%',
        marginTop: '15%',
    },
    forminput: {
        borderBottomColor: '#FFB703',
        borderBottomWidth: 1,
        marginLeft: 30,
        marginRight: 28,
        marginTop: 2,
        fontSize: 18,
        width: '80%'
    },
    forminput1: {
        marginBottom: 25,
        borderBottomColor: '#FFB703',
        borderBottomWidth: 1,
        marginLeft: 30,
        marginRight: 28,
        marginTop: 2,
        fontSize: 18,
        width: '80%'
    },
    display: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnentrar: {
        width: 225,
        height: 68,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: 'rgba(0,0,0,0)',
        borderRadius: 35,
        backgroundColor: '#8ECAE6',
        marginTop: 40,
    },
    bnttext: {
        color: '#023047',
        fontSize: 18,
        fontWeight: 'bold',
    },
    fromregistrar: {
        marginTop: 20,
        flexDirection: 'row',
    },
    contatxt: {
        fontSize: 20,
        color: '#023047',
    },
    criartxt: {
        marginLeft: 5,
        marginBottom: 10,
        fontSize: 20,
        color: '#FFB703',
    },
    img: {
        marginLeft: '67%',
        marginTop: '6%'
    }

})