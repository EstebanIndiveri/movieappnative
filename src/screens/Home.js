import React,{useState,useEffect} from 'react';

import {View, Text,StyleSheet,ScrollView} from 'react-native';
import { getNewsMoviesApi } from '../api/movies';
import {Title} from 'react-native-paper';
import CarouselVertical from '../components/CarouselVertical';

export default function Home() {
  const [newMovies, setNewMovies] = useState(null);
  const getMovies = async()=>{
    const data = await getNewsMoviesApi();
    setNewMovies(data.results);
  };
  useEffect(()=>{
    getMovies();
  },[]);
  console.log(newMovies);

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      {newMovies && (
        <View style={styles.news}>
        <Title style={styles.newsTitle}>Nuevas Peliculas</Title>
        <CarouselVertical data={newMovies}/>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  news:{
    marginVertical:10,
  },
  newsTitle:{
    marginBottom:15,
    marginHorizontal:20,
    fontWeight:'bold',
    fontSize:22,
  },
});
