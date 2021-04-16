import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import categoria from  '../categorias/index';
import rank from '../rank/index';
import minigame from '../minigame/index';
import  hamburguer from '../hamburguer/index'
export default function maingame(props) {
    const [nome, setnome] = useState('');
   const Tab = createMaterialBottomTabNavigator();
   const Drawer = createDrawerNavigator();


    async function sair() {
        await AsyncStorage.clear()
        getUser()
    }
        async function getUser() {
            let resposta = await AsyncStorage.getItem('userData')
            let resposta2 = JSON.parse(resposta)
            if(resposta2 === null) {
                props.navigation.navigate('Home');
            }else {
            setnome(resposta2.usuario)}
        }
        getUser()
    return ( 
        <Tab.Navigator 
        activeColor="#00537A"
        inactiveColor="#219EBC"
        barStyle={{ backgroundColor: '#FFF', height: 60, alignItems: 'center', justifyContent:'center'}}>
        <Tab.Screen 
        name="categorias" 
        component={categoria} 
        options={{
            tabBarLabel: '',
            tabBarIcon:({color}) => (
                <Icon name='home' size={35} color={color}  style={styles.iconss}/>
            ),
        }}   
        />
        <Tab.Screen 
        name="rank" 
        component={rank} 
        options={{
            tabBarLabel: '',
            tabBarIcon:({color}) => (
                <Icon name='emoji-events' size={35} color={color} style={styles.iconss}/>

            )
            
        }} 
        />
        <Tab.Screen 
        name="minigame" 
        component={minigame}
        options={{
            tabBarLabel: '',
            tabBarIcon:({color}) => (
                <Icon name='sports-esports' size={35} color={color} style={styles.iconss}/>

            )
            
        }} 
         />
         <Tab.Screen 
        name="hamburguer" 
        component={hamburguer} 
        options={{
            tabBarLabel: '',
            tabBarIcon:({color}) => (
                <Icon name='menu' size={35} color={color} style={styles.iconss}/>

            )
            
        }} 
        />
        </Tab.Navigator>
     )
}
const styles = StyleSheet.create({
   iconss: {
       width:35,
   }
  });