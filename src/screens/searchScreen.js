import React, { useState } from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsLists from '../Components/ResultsLists';
import { ScrollView } from 'react-native-gesture-handler';
const searchScreen = () => {
    const [term,setTerm] = useState('');
    const [searchApi,errorMessage,results] = useResults();
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price===price;
        })
    }
    return (
        <>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={()=>searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
            <ResultsLists  results={filterResultsByPrice('$')} title="Cheap"/>
            <ResultsLists  results={filterResultsByPrice('$$')} title="Medium"/>
            <ResultsLists  results={filterResultsByPrice('$$$')} title="High"/>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({});

export default searchScreen;