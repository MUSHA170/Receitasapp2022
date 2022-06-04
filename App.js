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
      <Stack.Navigator initialRouteName="Home" screenOptions={{tabBarShowLabel:true,headerShown:false,}}>

        <Stack.Screen name="Home" component={Home} options={{
          tabBarIcon:()=>(
            <Ionicons name="home-outline" size={24} color="gray" />
          )
        }}/>
        <Stack.Screen name="Favoritos" component={TelaFavoritos} options={{
          tabBarIcon:()=>(
            <Ionicons name="star-outline" size={24} color="gray" />
          )
        }}/>
        <Stack.Screen name="Procurar" component={TelaProcurar} options={{
          tabBarIcon:()=>(
            <Ionicons name="search-outline" size={24} color="gray" />
          )
        }} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#748A9D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
