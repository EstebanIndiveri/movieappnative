import React,{useState,useEffect} from 'react';

import {View, Text} from 'react-native';
import { getNewsMoviesApi } from '../api/movies';

export default function Home() {
  const [newMovies, setNewMovies] = useState(null);
  const getMovies = async()=>{
    const data = await getNewsMoviesApi();
    setNewMovies(data);
  };
  useEffect(()=>{
    getMovies();
  },[]);
  console.log(newMovies);

  return (
    <View>
      <Text>Estamos en Home</Text>
    </View>
  );
}
