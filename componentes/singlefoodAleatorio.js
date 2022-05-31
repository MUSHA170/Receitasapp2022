import React,{useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet,
        Text,
        View,
        Image,

        SafeAreaView,
        ScrollView,
        ActivityIndicator,
        FlatList,
        TouchableHighlight,
        TouchableOpacity,
        Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function(){
    const[salvo,Setsalvo]=useState(false);

    
///async storage///
salvarcomida = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
      Setsalvo(true)
    } catch(e) {
      alert("erro")
    }
  
    console.log('Done.')
  }

  const getAllKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
      alert(keys)
    } catch(e) {
        alert("erro")
    }
  }
 const remover = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
    }
  
    console.log('Done.')
  }
 const Tirardofavoritos = async (id) => {
    try {
      await AsyncStorage.removeItem(id)
      Setsalvo(false)
    } catch(e) {
        alert("erro")
    }
}
///async storage///


    const[visivel,setVisivel]=useState(false)
    /////Mealdb///////
    const[carregando,setCarregando]=useState(true)
    const[dados,setDados]=useState([])

    //PEGANDO DADOS DA API
    useEffect(()=>{
           fetch('https://www.themealdb.com/api/json/v1/1/random.php')
                .then((resp)=>resp.json())
                .then((json)=>setDados(json.meals))
                .catch(()=>(alert('Erro ao carregar lista de comidas')))
                .finally(()=>setCarregando(false))
       },[]
    )

    return(
       <View style={styles.cardReceita}>
           {
               carregando?<ActivityIndicator/>:(
                <FlatList
                   data={dados}
                   keyExtractor={({id},index)=>id}
                   renderItem={({item})=>(
                    <View>
                        {/*CARD RECEITA*/}
                        <TouchableHighlight  onPress={()=>{setVisivel(true)}}>
                            <View>
                                {/*IMAGEM DA COMIDA*/}   
                                <Image source={{uri:item.strMealThumb}} style={styles.cardImg}/>
                                <View style={styles.descricao}>
                                        {/*BOTAO SALVO*/}             
                                        {salvo==true?
                                        <TouchableOpacity style={styles.mark}  onPress={()=>{ Tirardofavoritos(item.idMeal)}}>
                                            <Ionicons name="bookmark" size={24} color="black" />
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity style={styles.mark}  onPress={()=>{salvarcomida(item.idMeal,item.strMeal)}}>
                                            <Ionicons name="bookmark-outline" size={24} color="black" />
                                        </TouchableOpacity>
                                        }
                                    {/*NOME DA RECEITA*/}
                                    <Text style={styles.txt}>{item.strMeal}</Text>
                                    {/*DESCRIÇÃO*/}
                                    <Text style={styles.txtdesc} >{item.strCategory}</Text>                      
                                </View>
                            </View>
                        </TouchableHighlight>

                        {/*PAGINA RECEITA*/}
                        <Modal animationType='fade' visible={visivel}>
                            <SafeAreaView>
                                <ScrollView>
                                    <TouchableHighlight onPress={()=>{setVisivel(false)}} style={styles.botaofechar}><Ionicons name="arrow-back" size={24} color="black" /></TouchableHighlight>
                                    <Image source={{uri:item.strMealThumb}} style={{width:"100%",height:300,}}/>
                                    <Text>nome = {item.strMeal}</Text>
                                    <Text>categoria = {item.strCategory}</Text>
                                    <Text>============INSTRUÇÕES============</Text>
                                    <Text>{item.strInstructions}</Text>
                                    <Text>==================================</Text>
                                    <Text>Ingredientes</Text>
                                    <Text>{item.strIngredient1}</Text>
                                    <Text>{item.strIngredient2}</Text>
                                    <Text>{item.strIngredient3}</Text>
                                    <Text>{item.strIngredient4}</Text>
                                    <Text>{item.strIngredient5}</Text>
                                    <Text>{item.strIngredient6}</Text>
                                    <Text>{item.strIngredient7}</Text>
                                    <Text>{item.strIngredient8}</Text>
                                    <Text>{item.strIngredient9}</Text>
                                    <Text>{item.strIngredient10}</Text>
                                    <Text>{item.strIngredient11}</Text>
                                    <Text>{item.strIngredient12}</Text>
                                    <Text>{item.strIngredient13}</Text>
                                    <Text>{item.strIngredient14}</Text>
                                    <Text>{item.strIngredient15}</Text>
                                    <Text>{item.strIngredient16}</Text>
                                    <Text>{item.strIngredient17}</Text>
                                    <Text>{item.strIngredient18}</Text>
                                    <Text>{item.strIngredient19}</Text>
                                    <Text>{item.strIngredient20}</Text>
                                </ScrollView>
                            </SafeAreaView>
                        </Modal>
                    </View>
                   )}
                />
              )
           }
                        
       </View>
    )
} 

const styles = StyleSheet.create({
    cardReceita:{
        backgroundColor: '#7bed8d',
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
