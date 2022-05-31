import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/////meus componentes//////////
import Home from './componentes/home'
import TelaProcurar from './componentes/TelaProcurar'
import TelaFavoritos from './componentes/telaFavoritos'


function TelaSacola() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Sacola</Text>
    </View>
  );
}



const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sacola" component={TelaSacola} />
        <Stack.Screen name="Favoritos" component={TelaFavoritos} />
        <Stack.Screen name="Procurar" component={TelaProcurar} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
