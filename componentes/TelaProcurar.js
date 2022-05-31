import React,{useState,useEffect}  from 'react';
import {StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    FlatList,
    TouchableHighlight,
    TouchableOpacity,
    Modal,
} from 'react-native';
import { Feather } from '@expo/vector-icons'; //icones
import { Ionicons } from '@expo/vector-icons';
import ComidaDados from './singlefoodDados';
import PagID from './singlefoodID'

export default function(){
    const [name, setarTexto] = useState("lasagne");
    //const name= 'cake'
    const[carregando,setCarregando]=useState(true)
    const[dados,setDados]=useState([])
    useEffect(()=>{
            
            fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+name)
                .then((resp)=>resp.json())
                .then((json)=>setDados(json.meals))
                .catch(()=>(alert('Erro ao carregar lista de comidas')))
                .finally(()=>setCarregando(false))
            
       },[name]
    )

    

    const Rpesq = 123;
   const Pesquisar=(texto)=>{
       
        console.log("pesquisar por  = ",texto);
    }

    return(
        <View>
            <SafeAreaView>
                <ScrollView style={{padding:10,}}>
                    <Text>Tela Procurar</Text>
                    <View style={{flexDirection: "row",width:"100%",}}>
                        <TextInput
                            style={styles.input}
                            placeholder="Pesquisar"
                            onEndEditing={(value)=>setarTexto(value.nativeEvent.text)}
                            
                            
                        />
                        <TouchableHighlight style={styles.btn} onPress={()=>{Pesquisar()}}>
                            <Ionicons name="search" size={24} color="black" />
                        </TouchableHighlight>
                    </View>
                    <Text>texto={name}</Text>
                    
                    <View style={styles.cardReceita}>
                        {
                            carregando?<ActivityIndicator/>:(
                                <FlatList
                                data={dados}
                                keyExtractor={item=>item.idMeal}
                                renderItem={({item})=>(
                                        <PagID id={item.idMeal}/>
                                )}
                                />
                            )
                        }
                    </View>


                </ScrollView>
            </SafeAreaView>
        </View>

    )
}

const styles = StyleSheet.create({
    input:{      
        height: 40,
        margin: 10,
        borderWidth: 1,
        padding: 10,
        flex:6,
    },
    btn:{      
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        backgroundColor:"#7bed8d",
        borderRadius:36,
    },
});
