import React,{useState} from 'react';
import {StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import ComidaAleatoria from './ComidaAleatoria'
import ComidaID from './ComidaID'

export default function(){

    return(
    <View >
      <ScrollView>
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <ImageBackground  style = {styles.bkgimg}  imageStyle={{borderBottomLeftRadius: 40,borderBottomRightRadius: 40, marginLeft: -5,}}source={require('../assets/n7qnkb1630444129.jpg')} resizeMode="cover">
                <Text style={styles.img}></Text>
                <View style={{backgroundColor:'rgba(0, 0, 0, 0.30)', width:'105%',marginLeft:-5,}}>
                  <Text style={{fontSize:30,alignSelf:'center',color:'#7bed8d'}}>Chivito uruguayo</Text>
                  <Text style={{fontSize:15,alignSelf:'center',color:'#fff'}}>Nova Receita</Text>
                </View>
            </ImageBackground>
            {/* <CardReceitas/> */}
            <View style={styles.section}>
              <Text style={{fontSize:19, fontWeight:'bold', alignSelf:'flex-start', marginTop: 15,}}>Comida Aleatória</Text>
              <ComidaAleatoria />
              <Text style={{fontSize:19, fontWeight:'bold', alignSelf:'flex-start', marginTop: 15,}}>Destaque</Text>
              <ComidaID id="52803"/>
              <Text style={{fontSize:19, fontWeight:'bold', alignSelf:'flex-start', marginTop: 15,}}>Sobremesa</Text>
              <ComidaID id="52917"/>
              <Text style={{fontSize:19, fontWeight:'bold', alignSelf:'flex-start', marginTop: 15,}}>Comida Vegana</Text>          
              <ComidaID id="52775"/>
              <Text style={{fontSize:19, fontWeight:'bold', alignSelf:'flex-start', marginTop: 15,}}>Comida Italiana</Text>  
              <ComidaID id="52771"/>
              <Text style={{fontSize:19, fontWeight:'bold', alignSelf:'flex-start', marginTop: 15,}}>Comida Japonesa</Text>  
              <ComidaID id="53033"/>
            </View> 
        </SafeAreaView>
      </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        padding: 10,
      },

      section:{
        width: '90%',
      },

      bkgimg:{
        marginTop: -10,
        width: '103%',
        height:550,
        padding: 1,
        
      },
      img: {
        color: 'white',
        fontSize: 20,
        marginTop: 35,
        marginBottom:380,
        alignSelf:'center',
        //fontFamily:'Acumin-RPro',
    
      },
      teste: {
        fontSize: 20,
        backgroundColor: '#AAA',
        marginTop: 100,
      },
      
});
