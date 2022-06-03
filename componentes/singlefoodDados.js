import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet,
        Text,
        View,
        ActivityIndicator,
        FlatList,
        TouchableHighlight,
        TouchableOpacity,
        Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SinglefoodID from './ComidaID'

export default function(props){


        //PEGANDO DADOS DO MEALDB PELO ID
    const name = props.name
    const[carregando,setCarregando]=useState(true)
    const[dados,setDados]=useState([])
    useEffect(()=>{
            
            fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+name)
                .then((resp)=>resp.json())
                .then((json)=>setDados(json.meals))
                .catch(()=>(alert('Erro ao carregar lista de comidas')))
                .finally(()=>setCarregando(false))
            
       },[]
    )

        //Modal/Poppup/pagina da receita/ pagina de informaçãoes detalhadas
    const[visivel,setVisivel]=useState(false)
  
    

    //ver se ja esta salvo
    ///async storage///
    //const[listadeFavoritos,setlistadeFavoritos]=useState([])
    const[salvo,Setsalvo]=useState();
    /* const pegarListaFavoritos = async () => {
            //const listadeFavoritos = []
            try {
                let listadeFavoritos = []
                listadeFavoritos = await AsyncStorage.getAllKeys()///certo
                listadeFavoritos = listadeFavoritos.includes(id)
                if (listadeFavoritos==true) {
                    Setsalvo(true)
                    console.log('Esta Salvo')
                }else{
                    Setsalvo(false)
                    console.log('NAO Esta Salvo')
                }
            } catch(e) {
                alert("erro pegarListaFavoritos"+ e)

            }
        } */


      
    return(
       <View style={styles.cardReceita}>
           {
               carregando?<ActivityIndicator/>:(
                <FlatList
                   data={dados}
                   keyExtractor={item=>item.idMeal}
                   renderItem={({item})=>(
                        <SinglefoodID id={item.idMeal}/>
                   )}
                />
              )
           }
                        
       </View>
    )
} 

const styles = StyleSheet.create({
    cardReceita:{
        backgroundColor: '#F0F4F8',
        width:'90%',
        marginTop:15,
        marginBottom:5,
        //height:400,
        borderRadius:36,
        paddingBottom:20,
        elevation:5,     
    },
    cardImg:{
        width:'100%',
        height:250,
        resizeMode:'stretch',
        borderRadius: 18,
        
    },
    txt:{

        marginTop:20,
        color: '#748A9D',
        //backgroundColor: '#fff',
        padding: 0,
        //borderRadius: 100,
        fontSize:15,
        
    },
    txtdesc:{       
        color: '#A6BCD0',
    },
    descricao:{
        width:'100%',
        //backgroundColor: '#F0F4F8',
        alignItems:'center',

    },
    mark:{
        //padding:10,
        position:'absolute',
        marginTop:5,
        right:5,
    },
    botaofechar:{
        margin:10,

    },
    mark2:{
        //padding:10,
        position:'absolute',
        marginTop:5,
        right:50,
    },
});
