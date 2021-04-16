import * as React from 'react';
import { View, Text } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import tela1 from './js/tela1'
import tela2 from './js/tela2'
enableScreens();
const Stack = createNativeStackNavigator();



function categorias(props) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="tela1" component={tela1}  options={{headerShown: false}} />
        <Stack.Screen name="tela2" component={tela2}  options={{headerShown: false}} />
      </Stack.Navigator>
    );
  }

export default categorias;


