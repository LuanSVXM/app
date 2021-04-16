import { StyleSheet } from "react-native";

const style = StyleSheet.create({
   texterror:(text='none') =>({
            color: '#D53624',
            fontSize: 13,
            fontWeight: 'bold',
            textAlign: 'center',
            display: text,
    }),
    textradio:(text='none') =>({
        color: 'black',
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
        display: text,
        marginLeft: -50
}),
    formentrar: {
        marginTop: 10,
        flexDirection: 'row'
    },
    btnentrar: {
        marginLeft:5,
    },
    textconta:{
        fontSize: 20,
        color: '#023047',
    },
    textentrar: {
        fontSize: 20,
        color: '#FFB703',
    },
    safe: {
        marginTop: 20,
        flex: 1, 
    },
    head: {
        height: 103,
        width: '100%',
        backgroundColor: '#8ECAE6',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    titulo: {
        color: '#00537A',
        fontWeight: 'bold',
        fontSize: 28,
        marginRight: '45%'
    },
    formulario: {
        width: '100%',
        height: '100%'
    },
    formtitulo: {
        fontSize: 21,
        marginLeft: 22,
        marginTop: 20,
        marginBottom: 10,
    },
    forminput: {
        borderBottomColor: '#FFB703',
        borderBottomWidth: 1,
        marginLeft: 30,
        marginRight: 28,
        marginTop: 2,
        fontSize: 18
    },
    formradio: {
        marginLeft: 30,
        justifyContent: 'space-between',

    },
    tituloradio:{
        fontSize: 21,
        marginBottom: 15,
        marginTop: 20,
    },
    titulodata: {
        fontSize: 20,
        marginTop: 21,
        marginLeft: 60,
    },
    formdata: {
        marginTop: 10,
       flexDirection: 'row',

    },
    numberdata: {
        width: 20,
        height: 20,
        borderBottomColor: '#FFB703',
        borderBottomWidth: 1,
        fontSize: 18,
    },
    number_data: {
        width: 42,
        height: 20,
        borderBottomColor: '#FFB703',
        borderBottomWidth: 1,
        fontSize: 18,
    },
    barrinha: {
        width: 10,
        paddingTop: 2,
        color: '#FFB703',
        borderBottomColor: '#FFB703',
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
        marginTop: 40,
       },
       btntext: {
         color: '#023047',
         fontSize: 18,
         fontWeight: 'bold',
         fontStyle: 'italic',
       },
       formbutao: {
           alignItems:'center',
           height: 200,
       }

})
export {style}