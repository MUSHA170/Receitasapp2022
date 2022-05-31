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
import AsyncStorage from '@react-native-async-storage/async-storage';

import CardReceitas from './CardReceitaAleatoria'
import Header from './header'
import ComidaAleatoria from './singlefoodAleatorio'
import Comidaid from './singlefoodID'

export default function(){
  const remover = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
    }
  
    console.log('Removido')
  }

  const getAllKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
      alert(keys)
    } catch(e) {
        alert("erro")
    }
  }
  /* testes */
   const data= "52893";
  
  function display(){
       return(
          <Text></Text>
       );
    } 
/* teste^^ */
    return(
    <View >
      <ScrollView>
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <ImageBackground  style = {styles.bkgimg}  imageStyle={{borderBottomLeftRadius: 36,borderBottomRightRadius: 36,}}source={require('../assets/hero-photo.png')} resizeMode="cover">
                <Text style={styles.img}>Home</Text>
                <Text style={{fontSize:30,alignSelf:'center', marginTop:380,color:'#7bed8d'}}>Ovada</Text>
                <Text style={{fontSize:15,alignSelf:'center',color:'#fff'}}>Nova Receita</Text>
            </ImageBackground>
            {/* <Header/> */}
            {/*TESTES */}
                  <TouchableOpacity  onPress={()=>{ getAllKeys()}}>
                      <Ionicons name="subway" size={24} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{ remover()}}>
                      <Ionicons name="airplane-sharp" size={24} color="black" />
                  </TouchableOpacity><TouchableOpacity onPress={()=>{ display()}}>
                      <Ionicons name="albums-outline" size={24} color="black" />
                  </TouchableOpacity>
                  <Text>teste</Text>
                  {display()}
            {/*TESTES ^ */}
            {/* <CardReceitas/> */}
            {/* <ComidaAleatoria /> */}
            <Comidaid id="53037"/>
            <Comidaid id="52764"/>
            <Comidaid id={data}/> 
            
            <TouchableOpacity /* onPress={()=>{ addMaisCard()}} */>
              <Text>Carregar Mais</Text>
            </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //paddingTop:10,
      },
      bkgimg:{
        width:'100%',
        height:550,
        
      },
      img: {
        color: 'white',
        fontSize: 20,
        marginTop: 35,
        alignSelf:'center',
        //fontFamily:'Acumin-RPro',
    
      },
      teste: {
        height: '50%',
        width: '90%',
        backgroundColor: '#AAA',
        marginTop: 100,
      },
     
});
