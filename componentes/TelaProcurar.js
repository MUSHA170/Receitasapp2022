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
    const [texto, setarTexto] = useState("");

    const[carregando,setCarregando]=useState(true)
    const[dados,setDados]=useState([])
    useEffect(()=>{
            
            fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+texto)
                .then((resp)=>resp.json())
                .then((json)=>setDados(json.meals))
                .catch(()=>(alert('Erro ao carregar lista de comidas')))
                .finally(()=>setCarregando(false))
            
       },[texto]
    )

    return(
        <View>
            <SafeAreaView style={{backgroundColor:'#fff',}}>
                <ScrollView style={{padding:20,}}>
                    <Text style={styles.teste}>Procurar Receitas</Text>
                    <View style={{flexDirection: "row",width:"100%",}}>
                        <TextInput
                            style={styles.input}
                            placeholder={texto}
                            onEndEditing={(value)=>setarTexto(value.nativeEvent.text)}                
                        />
                        {/* <TouchableHighlight style={styles.btn} onPress={()=>{Pesquisar()}}>
                            <Ionicons name="search" size={24} color="black" />
                        </TouchableHighlight> */}
                    </View>            
                    <View style={styles.container} >
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

    container:{
        width:'95%',
        marginLeft:10,
        backgroundColor:'#fff',
    },

    input:{      
        height: 40,
        margin: 10,
        marginBottom:30,
        borderWidth: 0.5,
        borderRadius: 20,
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

    teste:{
        marginTop: 40,
        marginBottom: 15,
        color:'#748A9D',
        fontSize:20,
        paddingLeft:10,
        alignSelf:'center',
    },

});
