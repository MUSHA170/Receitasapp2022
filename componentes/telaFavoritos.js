import React,{useState}  from 'react';
import {StyleSheet,
        Text,
        View,
        SafeAreaView,
        ScrollView,
        TouchableOpacity,
        RefreshControl,
     } from 'react-native';
import { Ionicons } from '@expo/vector-icons';//icone
import AsyncStorage from '@react-native-async-storage/async-storage';//Memoria local
import SinglefoodID from './ComidaID'//

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
const remover = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
    }
  
    console.log('Removido')
  }
    return(
    
    <View style={{flex:1}}>
        <ScrollView 
                refreshControl={
                    <RefreshControl
                        refreshing={atualizando}
                        onRefresh={aoAtualizar}
                    />
                }>
            <SafeAreaView style={styles.container}>                
                    <Text style={styles.txt}>TELA FAVORITOS</Text>
                    <TouchableOpacity style={{alignSelf:'flex-end', position:'absolute',margin:5}} onPress={()=>{remover()}}>
                        <Ionicons name="trash-outline" size={24} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>{ getAllKeys()}} style={styles.btnCarregar}>
                        {/* <Ionicons name="reload-circle-outline" size={30} color="black" /> */}
                        <Text style={{color:'#fff',}}>ATUALIZAR</Text>
                    </TouchableOpacity>
                    <View style={styles.scrollvi}>
                        {
                            key.map(i=>(
                                <SinglefoodID id={i}/>
                            ))
                        }
                    </View>                
            </SafeAreaView>
        </ScrollView>
    </View>

    )
}

const styles = StyleSheet.create({

    container:{
        margin:10,
    },

    scrollvi:{
        alignItems:'center',
        width:'90%',
        marginTop:30,
        marginLeft:20,
        
    },

    txt:{
        marginLeft:20,
        color: 'gray',
        //backgroundColor: 'red',
        //borderRadius: 100,
        paddingTop: 10,        
        fontSize:15, 
    },

    btnCarregar:{
        width:'80%',
        backgroundColor:"#7bed8d",
        color: '#FFF',
        borderRadius:36,
        marginTop:30,
        marginLeft:40,
        padding:15,
        alignItems:'center',
    }

});
