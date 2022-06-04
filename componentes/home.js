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

//import CardReceitas from './CardReceitaAleatoria'
import Header from './header'
//import ComidaAleatoria from './singlefoodAleatorio'
import ComidaAleatoria from './ComidaAleatoria'
import SinglefoodID from './ComidaID'

export default function(){

    return(
    <View >
      <ScrollView>
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <ImageBackground  style = {styles.bkgimg}  imageStyle={{borderBottomLeftRadius: 36,borderBottomRightRadius: 36,}}source={require('../assets/n7qnkb1630444129.jpg')} resizeMode="cover">
                <Text style={styles.img}>Home</Text>
                <View style={{backgroundColor:'rgba(0, 0, 0, 0.30)'}}>
                  <Text style={{fontSize:30,alignSelf:'center',color:'#7bed8d'}}>Chivito uruguayo</Text>
                  <Text style={{fontSize:15,alignSelf:'center',color:'#fff'}}>Nova Receita</Text>
                </View>
            </ImageBackground>
            {/* <CardReceitas/> */}
            <Text>RECEITA ALEATORIA</Text>
            <ComidaAleatoria/>
            <Text>DESTAQUE</Text>
            <SinglefoodID id="52803"/>
            <Text>SOBREMESA</Text>
            <SinglefoodID id="52917"/>
            <Text>COMIDA VEGANA</Text>          
            <SinglefoodID id="52775"/>
            <Text>ITÁLIA</Text>  
            <SinglefoodID id="52771"/>
            <Text>JAPÃO</Text>  
            <SinglefoodID id="53033"/>
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
        marginBottom:380,
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
