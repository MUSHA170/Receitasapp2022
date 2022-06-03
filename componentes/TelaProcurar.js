import React,{useState,useEffect}  from 'react';
import {StyleSheet,
    Text,
    View,
    TextInput,
    SafeAreaView,
    ScrollView,
    ActivityIndicator,
    FlatList,
} from 'react-native';
import ComidaDados from './singlefoodDados';
import ComidaID from './ComidaID'

export default function(){
    const [name, setarTexto] = useState("lasagne");

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

    return(
        <View>
            <SafeAreaView>
                <ScrollView style={{padding:10,}}>
                    <Text style={styles.teste}>Procurar</Text>
                    <View style={{flexDirection: "row",width:"100%",}}>
                        <TextInput
                            style={styles.input}
                            placeholder={name}
                            onEndEditing={(value)=>setarTexto(value.nativeEvent.text)}
                            
                            
                        />
                        {/* <TouchableHighlight style={styles.btn} onPress={()=>{Pesquisar()}}>
                            <Ionicons name="search" size={24} color="black" />
                        </TouchableHighlight> */}
                    </View>            
                    <View >
                        {
                            carregando?<ActivityIndicator/>:(
                                <FlatList
                                data={dados}
                                keyExtractor={item=>item.idMeal}
                                renderItem={({item})=>(
                                        <ComidaID id={item.idMeal}/>
                                )}/>
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
        padding:8,
        justifyContent:"center",
        alignItems:"center",
        flex:1,
        backgroundColor:"#7bed8d",
        borderRadius:36,
    },

});
