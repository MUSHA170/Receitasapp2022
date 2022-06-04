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


export default function(props){

    

        //PEGANDO DADOS DO MEALDB PELO ID
    let id = props.id
    const[carregando,setCarregando]=useState(true)
    const[dados,setDados]=useState([])
    useEffect(()=>{
            
            fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+id)
                .then((resp)=>resp.json())
                .then((json)=>setDados(json.meals))
                .catch(()=>(alert('Erro ao carregar lista de comidas')))
                .finally(()=>setCarregando(false))
            pegarListaFavoritos()
       },[]
    )
    

        //Modal/Poppup/pagina da receita/ pagina de informaçãoes detalhadas
    const[visivel,setVisivel]=useState(false)
  
    //ver se ja esta salvo
    ///async storage///
    //const[listadeFavoritos,setlistadeFavoritos]=useState([])
    const[salvo,Setsalvo]=useState();
    const pegarListaFavoritos = async () => {
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
        }

    salvarcomida = async (key, value) => {
        try {
        await AsyncStorage.setItem(key, value)
        pegarListaFavoritos()
        Setsalvo(true)
        } catch(e) {
        alert("erro ao salvar comida")
        }
    
        console.log('Salvo')
    }

    const Tirardofavoritos = async (id) => {
        try {
        await AsyncStorage.removeItem(id)
        pegarListaFavoritos()
        Setsalvo(false)
        } catch(e) {
            alert("erro ao Tirardofavoritos")
        }
        console.log('Tirado do Salvo')
    }




    return(
       <View style={styles.cardReceita}>
           {
               carregando?<ActivityIndicator/>:(
                <FlatList
                   data={dados}
                   keyExtractor={item=>item.idMeal}
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
                                <ScrollView >
                                    <View style={{padding:5,backgroundColor:'#effc97'}}>
                                        <TouchableHighlight onPress={()=>{setVisivel(false)}} style={styles.botaofechar}>
                                            <Ionicons name="arrow-back" size={24} color="black" />
                                        </TouchableHighlight>
                                        <Image source={{uri:item.strMealThumb}} style={{width:"100%",height:300,}}/>
                                        <View style={{alignItems:'center'}}>
                                            <Text style={styles.nomeF}>{item.strMeal}</Text>
                                            
                                        </View>
                                        <Text></Text>
                                        <View style={styles.instFContainer}>
                                            <Text style={styles.textcenter}>INSTRUÇÕES</Text>
                                            <Text style={styles.instF}>{item.strInstructions}</Text>
                                        <Text>__________________________________________________________</Text>
                                        </View>
                                        <Text style={styles.textcenter}>INGREDIENTES</Text>
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
                                    </View>
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
        backgroundColor: '#FFF',
        width:'100%',
        marginTop:15,
        marginBottom:5,
        //height:400,
        borderRadius:15,
        paddingBottom:20,
        elevation:5,     
        
    },
    cardImg:{
        backgroundColor: '#F0F4F8',
        width:'100%',
        height:250,
        resizeMode:'stretch',
        borderRadius: 0,
        
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
    nomeF:{
        fontSize:20,
        color:"#000000",

    },
    instF:{
        
        padding:10,
    },
    instFContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    textcenter:{
        flex:1,
        alignSelf: 'center',
        color:'#000000',
    },

    
});
