import React,{useState,useEffect} from 'react';
import {View, Text} from 'react-native';
import { getMovieByIdApi } from '../api/movies';

export default function Movie(props) {
  const{route}=props;
  const{id}=route.params;
  const [movie, setMovie] = useState(null);
  useEffect(()=>{
    getMovieByIdApi(id).then((response)=>{
      setMovie(response);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <View>
      <Text>Estamos en Movie</Text>
    </View>
  );
}
