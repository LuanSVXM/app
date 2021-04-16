import { StyleSheet } from "react-native";

const Estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#219EBC',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
      textAlign: 'center',
      lineHeight: 23,
      fontFamily: 'sans-serif',
      fontSize: 20,
      color: '#FFF',
      height: 125,
      width: 265,
      marginTop: 5,
      marginBottom: 25,
    },
    butao: {
      width: 225,
      height: 68,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 4,
      borderColor: 'rgba(0,0,0,0)',
      borderRadius: 35,
      backgroundColor: '#8ECAE6',
      shadowOffset:{  width: 0,  height: 12, },
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 0.1,
      elevation: 50,
      marginBottom: 15,
      
     },
     btntext: {
       color: '#023047',
       fontSize: 18,
       fontWeight: 'bold',
       fontStyle: 'italic',
     },
     posicao: {
      marginBottom: 15,
     },
      entrar: {
        marginLeft: 5,
        color: '#FFB703',
        fontSize: 25,
      },
      pergunta: {
        fontSize: 25,
        color: '#FFF',
      },
      teste: {
        marginTop: 10,
        flexDirection: 'row',
      },
      formentrar:{
        backgroundColor: 'red',
        width: 250,
      },
  });
  export {Estilos};
  