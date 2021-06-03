import React,{useEffect,useState} from 'react';
import {View, Text} from 'react-native';
import { searchMovieApi } from '../api/movies';

export default function Search() {
  const [movies, setMovies] = useState(null);

  useEffect(()=>{
    searchMovieApi('spiderman').then((response)=>{
      setMovies(response.results);
    });
  },[]);

  return (
    <View>
      <Text>Estamos en Search Testing MAC</Text>
    </View>
  );
}
