import React from 'react';
import { StyleSheet, Text, View ,TouchableHighlight,Alert} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; //icones
import { Feather } from '@expo/vector-icons'; //icones


export default function(){
    return(
        <View style={styles.back}>
            <View style={styles.categorias}>

                <TouchableHighlight onPress={() => Alert.alert('Botao Home')}>
                    <AntDesign name="home" size={24} color="black" style={{padding: 10,backgroundColor:'#7bed8d',borderRadius:100,}}/>
                </TouchableHighlight>
                
                <TouchableHighlight onPress={() => Alert.alert('Botao Sacola')}>
                    <Feather name="shopping-bag" size={24} color="black" style={{padding: 10,}}/>
                </TouchableHighlight>
                
                <TouchableHighlight onPress={() => Alert.alert('Botao Salvos')}>
                    <Feather name="bookmark" size={24} color="black" style={{padding: 10,}}/>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => Alert.alert('Botao procurar')}>
                    <AntDesign name="search1" size={24} color="black" style={{padding: 10,}}/>
                </TouchableHighlight>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    back: {
      width:'100%',
      paddingTop:15,
      paddingBottom:15,
      backgroundColor: '#fff',
      alignItems: 'center',
      borderBottomLeftRadius: 36,
      borderBottomRightRadius: 36,
      elevation:10,
      marginBottom:10,
    },
    txt:{
        //fontFamily:'Comic-Sans',
        //margin:10,
        color: '#fff',
        //backgroundColor: '#fff',
        padding: 10,
        borderRadius: 100,
        fontSize:15,
    },
    txt2:{
        //fontFamily:'Comic-Sans',
        //margin:10,
        color: 'black',
        //backgroundColor: '#fff',
        padding: 10,
        borderRadius: 100,
        fontSize:15,
    },
    categorias:{
        justifyContent: 'space-around',
        flexDirection:'row', 
       // backgroundColor: "#aaea",
       // marginTop: 10,
       // marginLeft: 50,
        width:'100%'},
});
