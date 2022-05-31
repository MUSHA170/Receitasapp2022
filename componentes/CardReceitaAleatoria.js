import React,{useState}  from 'react';
import { StyleSheet, Text, View ,Image, Alert, TouchableHighlight,TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; //icones
import { Ionicons } from '@expo/vector-icons';

export default function(){

    const[receita,setreceita]=useState({
        id:1,
        name:'limao',
        //rand:'www.themealdb.com/api/json/v1/1/random.php',
        
    });



    return(
        <TouchableHighlight style={styles.cardReceita} onPress={() => Alert.alert(console.log("hello world"))}>
            <View>
                    <Image source={require('../assets/photo-2.png')} style={styles.cardImg}/>
                    <View style={styles.descricao}>                 
                        <TouchableOpacity style={styles.mark} onPress={()=>{}} >
                            <Ionicons name="bookmark" size={24} color="black" />
                            <Ionicons name="bookmark-outline" size={24} color="black" />
                        </TouchableOpacity>
                        {/*nome da receita*/}
                        <Text style={styles.txt}>{receita.name}</Text>
                        {/*descrição*/}
                        <Text style={styles.txtdesc} >descraksjdak akjsd jahskdjnawn kjcnkajwc dkjw sdasdabjkhblirug jfnakej</Text>
                    </View>
            </View>
        </TouchableHighlight>

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
    
});
