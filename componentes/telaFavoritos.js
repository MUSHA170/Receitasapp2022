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
        <SafeAreaView>
            <ScrollView 
                refreshControl={
                    <RefreshControl
                        refreshing={atualizando}
                        onRefresh={aoAtualizar}
                    />
                }>
                <Text style={styles.txt}>TELA FAVORITOS</Text>
                <TouchableOpacity style={{alignSelf:'flex-end', position:'absolute',margin:5}} onPress={()=>{remover()}}>
                    <Ionicons name="trash-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>{ getAllKeys()}} style={styles.btnCarregar}>
                    {/* <Ionicons name="reload-circle-outline" size={30} color="black" /> */}
                    <Text>ATUALIZAR</Text>
                </TouchableOpacity>
                <View style={styles.scrollvi}>
                    {
                        key.map(i=>(
                            <SinglefoodID id={i}/>
                        ))
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    </View>

    )
}

const styles = StyleSheet.create({
    scrollvi:{
        alignItems:'center',
        
    },
    txt:{

        marginLeft:20,
        color: '#fff',
        //backgroundColor: '#fff',
        padding: 0,
        //borderRadius: 100,
        fontSize:15,
        
    },
    btnCarregar:{
        backgroundColor:"#7bed8d",
        borderRadius:36,
        margin:10,
        padding:10,
        alignItems:'center',
    }

});
