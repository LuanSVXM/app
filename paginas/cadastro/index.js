import React, {useState, setState} from "react";
import {View, Text, StyleSheet, TextInput, SafeAreaView, ScrollView, TouchableOpacity, Button} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {style} from './css/css'
var radiosexo = [
    {label:'Masculino', value: 0 },
    {label: 'Feminino', value: 1 },
    {label: 'Outro', value: 2}
  ];
export default function cadastro(props){  
  async function historico(a) {
    const response = await fetch('http://192.168.1.104:3000/createhistorico', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: a.id
    })
  })
}

    async function verificar2(a) {
        const response = await fetch('http://192.168.1.104:3000/verificaremail', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: a
        })
      });
      let teste = await response.json()
      if(teste === 'error') {
           setdisplay2_0('none'); 
           setEmail(a)  
           setEmail(a) 
      } else {
           setdisplay2_0('flex');
           setEmail('')    
      }
    }
      async function vericar1(a) {
        const response = await fetch('http://192.168.1.104:3000/verificarusuario', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          usuario: a
        })
      });
      let teste = await response.json()
      if(teste === 'error') {
           setdisplay1_0('none'); 
           setUsuario(a)
           setUsuario(a)   
      } else {
         setdisplay1_0('flex');  
         setUsuario('')  
      }
    }
    async function criacao() {
      const response = await fetch('http://192.168.1.104:3000/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        sexo: sexo,
        nome: nome,
        senha: senha,
        usuario: usuario,
        datanascimento: datanascimento,
        email: email,
      })
    });
    const envio = await fetch('http://192.168.1.104:3000/login', {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          usuario: usuario,
          senha: senha,
      })
  });
  let teste = await envio.json()
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
      let pegar = await AsyncStorage.getItem('userData');
      let verificar = await JSON.parse(pegar);
      historico(verificar)
      props.navigation.navigate('maingame');  
  }

  }


    function verificarnome(a) {
        const pattern = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
        let mm = pattern.test(a);
        if(mm === true){
             setdisplay('none')
             setNome(a)
        } else {
            setdisplay('flex')
            setNome('')
        }
    };
function verificarusuario(a) {
    const pattern = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/
    let mm = pattern.test(a);
    if(mm === true){
        let b = a.toLowerCase()
         setdisplay1('none')
         vericar1(b)
    } else {
        setdisplay1('flex')
        setUsuario('')
    }
    
}
function verificaremail(a) {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let mm = pattern.test(a);
    if(mm === true){
        let b = a.toLowerCase()
         setdisplay2('none')
         verificar2(b)
    } else if(a === '') {
        setdisplay2('none')
        setEmail('')
    } else {
        setdisplay2('flex')
        setEmail('')
    }
    
}
function verificarsenha(a) {
    setsenha(a);
    let b = a.length
    if(b >= 6 ){
        setdisplay3('none')
    } else if(b === 0) {
        setdisplay3('none')
    } else {
        setdisplay3('flex')
    }
}
function  confirmarsenha(a,b){
      if(a === b) {
         setdisplay4('none')
         setSenha(a)
      } else if(a==='') {
        setdisplay4('none')
        setSenha('')
      } else { setdisplay4('flex'); setSenha('')}
}
function configradio(a) {
      if( a === 0) { setsexo('M');
           setdisplay5('none');           }
      if( a === 1) { setsexo('F');         
      setdisplay5('none');      }
      if( a === 2) { setsexo('O');  
      setdisplay5('none');
    }
}
function verificacao() {
    if( display1 === 'none' && display1_0 === 'none' && display === 'none' && display2 === 'none' && display2_0 === 'none' && display3 === 'none' && display4 === 'none' && display5 === 'none' && usuario !== '' && senha !== '' && nome !== '' && sexo !== '' && email !== '' && datanascimento !== '') {
         vericar1(usuario);
         verificar2(email);
         if(display1_0 === 'none' && display2_0 === 'none'){
           criacao();
         } 
    }else {
      console.log('error');
    }
}
    const [historico22, sethistorico2] = useState('a')
    const [usuario , setUsuario] = useState('')
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [password, setSenha] = useState('')
    const [sexo, setsexo] = useState('')
    const [datanascimento, setDatanascimento] = useState('')
    const [display,  setdisplay]= useState('none');
    const [display1, setdisplay1]= useState('none');
    const [display1_0, setdisplay1_0]= useState('none');
    const [display2, setdisplay2]= useState('none');
    const [display2_0, setdisplay2_0]= useState('none');
    const [display3, setdisplay3]= useState('none');
    const [display4, setdisplay4]= useState('none');
    const [display5, setdisplay5]= useState('flex');
    const [senha, setsenha] = useState('')
    const year = new Date().getFullYear();
    const month = new Date().getMonth()+1;
    const day = new Date().getDate();
    const newDate = day+'-'+month+'-'+year
    const [data, setdata] = useState(newDate)
    const [data2, setdata2] = useState(data)
    function arrumardata(data){
     setdata(data);
     let a = data.split('-');
     let mm = a[1];
     let dd = a[0];
     let yyyy = a[2];
     let datareal = mm+'/'+dd+'/'+yyyy;
     console.log(datareal);
     setDatanascimento(datareal);

    }    
    return(
        <SafeAreaView style={style.safe}>
            <ScrollView>
                <View style={style.head}>
                    <Text style={style.titulo}>Criar Conta </Text>
                </View>
                <View style={style.formulario}>
                     <Text style={style.formtitulo}>Nome</Text>
                     <TextInput style={style.forminput} placeholder="Insira seu Nome Completo" onEndEditing={ tex=> verificarnome(tex.nativeEvent.text)} ></TextInput>
                     <Text style={style.texterror(display)}>Nome incorreto: não pode ter caracteres especiais/números</Text>
                     <Text style={style.formtitulo}>Nome de usuario</Text>
                     <TextInput style={style.forminput} placeholder="Username" onEndEditing={tex=> verificarusuario(tex.nativeEvent.text)} maxLength={20}></TextInput>
                     <Text style={style.texterror(display1)}>Nome de usuário inválido: não pode conter caracteres especiais</Text>
                     <Text style={style.texterror(display1_0)}>Nome de usuário já utilizado</Text>
                     <Text style={style.formtitulo}>E-mail</Text>
                     <TextInput style={style.forminput} placeholder="Insira Seu Email" onEndEditing={tex=> verificaremail(tex.nativeEvent.text)} keyboardType = 'email-address'></TextInput>
                     <Text style={style.texterror(display2)}>Email inválido: tem que conter o '@' e sem espaço</Text>
                     <Text style={style.texterror(display2_0)}>Email Já Registrado</Text>
                     <Text style={style.formtitulo}>Senha</Text>
                     <TextInput style={style.forminput} placeholder="Senha(mínimo de 6 caracteres)" secureTextEntry={true} onEndEditing={tex=> verificarsenha(tex.nativeEvent.text)} ></TextInput>
                     <Text style={style.texterror(display3)}>Senha invalida: precisa no mínimo 6 caracteres</Text>
                     <Text style={style.formtitulo}>Confirmar Senha</Text>
                     <TextInput style={style.forminput} placeholder="Escreva novamente Sua Senha" secureTextEntry={true} onEndEditing={tex => confirmarsenha(tex.nativeEvent.text,senha)}></TextInput>
                     <Text style={style.texterror(display4)}>Senha nao correspondendo</Text>
                     <View style={style.formradio}>
                      <Text style={style.tituloradio}>Gênero</Text>
                    <RadioForm radio_props={radiosexo} onPress={(value) => {configradio(value)} } initial={-1}  formHorizontal={true} buttonColor = {'#FFB703'}  buttonSize ={8}/>
                    <Text style={style.textradio(display5)}>Por favor escolha 1</Text>
                    <Text style={style.titulodata}>Data de Nascimento</Text>
                     <View style={style.formdata}>
                     <DatePicker
        style={{width: 200}}
        date={data}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="01-01-1950"
        maxDate={newDate}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateInput: {
            marginLeft: 90
          }
          // ... You can check the source to find the other keys.
        }}
        showIcon={false}
        onDateChange={(date) => arrumardata(date)}
      />
                    </View>
                     </View>
                     <View style={style.formbutao}>
                     <TouchableOpacity style={style.butao} onPress={() => verificacao()}>
                             <Text style={style.btntext}>Começar a aprender</Text>
                    </TouchableOpacity>
                     <View style={style.formentrar}>
                     <Text style={style.textconta}>Já tem uma conta?</Text>
                         <TouchableOpacity style={style.btnentrar} onPress={() =>  props.navigation.navigate('login')}><Text style={style.textentrar}>Entrar</Text></TouchableOpacity>
                         </View> 
                     </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
