import React,{useState}  from 'react';
import {StyleSheet,
        Text,
        View,
        SafeAreaView,
        ScrollView,
        FlatList,
        Image,
        Alert,
        TouchableHighlight,
        TouchableOpacity,
        RefreshControl,
     } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Comidaid from './singlefoodID'
export default function(){

    const[key,setKey]=useState([])
    const getAllKeys = async () => {
        let keys = []
        try {
          keys = await AsyncStorage.getAllKeys()
          setKey(keys)
        } catch(e) {
            alert("erro")
        }
    }


const[atualizando,setaAtualizando]=useState(false)
const aoAtualizar=()=>{
    setaAtualizando(true);
    getAllKeys();
    setaAtualizando(false);
}
    return(
    
    <View style={{flex:1}}>
        <SafeAreaView>
            <ScrollView 
                Text style={styles.scrollvi}
                refreshControl={
                    <RefreshControl
                        refreshing={atualizando}
                        onRefresh={aoAtualizar}
                    />
                }
            >
                <TouchableOpacity  onPress={()=>{ getAllKeys()}}>
                    <Ionicons name="reload-circle-outline" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.txt}>TELA FAVORITOS</Text>
                {
                    key.map(i=>(
                        <Comidaid id={i}/>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    </View>

    )
}

const styles = StyleSheet.create({
    scrollvi:{
        margin:10,
    },
    txt:{

        //margin:20,
        color: '#748A9D',
        //backgroundColor: '#fff',
        padding: 0,
        //borderRadius: 100,
        fontSize:15,
        
    },
});
