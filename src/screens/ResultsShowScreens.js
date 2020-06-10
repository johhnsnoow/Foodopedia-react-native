import React, { useState, useEffect } from 'react';
import {View,StyleSheet,Button,Text,Image,FlatList} from 'react-native';
import yelp from '../api/yelp';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ResultsShowScreens = ({navigation}) => {
    const [result,setResult] = useState(null);
    const id= navigation.getParam('id');

    console.log(result);
    
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }
    useEffect(()=>{
        getResult(id);
    },[])
    if(!result)
    {
        return null;
    }
    return <View>
        <Text style={styles.text} >{result.name}</Text>
        <Text selectable={true} selectionColor='orange' style={styles.phone} >Phone no. is : {result.phone}</Text>
        <Text selectable={true} selectionColor='orange' style={styles.phone} >Address is : {result.location.address1} , {result.location.city} , {result.location.state} {result.location.zip_code}</Text>
        
        <FlatList 
        data={result.photos}
        keyExtractor={(photo)=> photo}
        renderItem={({item})=>{
            return <Image style={styles.image} source={{uri:item}}/>
        }}
        />
    </View>
}

const styles = StyleSheet.create({
    image:{
        height:200,
        width:300,
        marginBottom:5,
        marginTop:10
    },
    phone:{
        color:'gray',
        fontSize:16
    }
    ,
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'black'
    }
});

export default ResultsShowScreens;