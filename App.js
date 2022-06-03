import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
/////meus componentes//////////
import Home from './componentes/home'
import TelaProcurar from './componentes/TelaProcurar'
import TelaFavoritos from './componentes/telaFavoritos'

const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{tabBarShowLabel:true,headerShown:true,}}>

        <Stack.Screen name="Home" component={Home} options={{
          tabBarIcon:()=>(
            <Ionicons name="home" size={24} color="black" />
          )
        }}/>
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
