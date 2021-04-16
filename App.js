import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import login from './paginas/login';
import Home from './paginas/home';
import cadastro from './paginas/cadastro';
import maingame from './paginas/maingame/maingame/index';
const Stack = createStackNavigator();



function App(props) {
    return ( 
        <NavigationContainer>
      <Stack.Navigator>      
        <Stack.Screen name="Home"  component={Home} options={{headerShown: false}} />
        <Stack.Screen name="login" component={login} options={{headerShown: false}} />
        <Stack.Screen name="cadastro" component={cadastro} options={{headerShown: false}} />
        <Stack.Screen name="maingame" component={maingame} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default App;