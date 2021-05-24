import React,{useState,useEffect} from 'react';
import {View,StyleSheet,ScrollView,Image} from 'react-native';
import {Text, Title} from 'react-native-paper'; 
import {map} from 'lodash'
import {getPopularMoviesApi} from '../api/movies'
import { BASE_PATH_IMG } from '../../utils/constans';
import noImage from '../assets/png/default-imgage.png';
import { Rating } from 'react-native-ratings';
import usePreferences from '../hooks/usePreferences';
import starDark from '../assets/png/starDark.png';
import startLigh from '../assets/png/starLight.png';
export default function Popular(props) {
  const {theme} =usePreferences();
  const {navigation}=props;
  const [movies, setMovies] = useState(null);
  useEffect(()=>{
    getPopularMoviesApi().then(res=>{
      setMovies(res.results);
    });
  },[]);
  return (
    <ScrollView>
      {map(movies,(movie,index)=>(
        <Movie key={index} movie={movie} theme={theme}/>
      ))}
    </ScrollView>
  );
}

function Movie(props){
  const{movie,theme}=props;
  const {title,release_date,vote_count, vote_average}=movie;
  return(
    <View style={styles.movie}>
      <View style={styles.left}>
        <Image style={styles.image} source={movie.poster_path?{uri:`${BASE_PATH_IMG}/w500/${movie.poster_path}`}:{noImage}}/>
      </View>
      <View>
        <Title>
          {title}
        </Title>
        <Text>{release_date}</Text>
        <MovieRating theme={theme} voteCount={vote_count} voteAverage={vote_average}/>
      </View>
    </View>
  )
}
function MovieRating(props){
  const{theme,voteCount,voteAverage}=props;
  const media=voteAverage/2;
  return(
    <View style={styles.viewRating}>
      <Rating
      type="custom"
      ratingImage={theme === 'dark' ? starDark : startLigh}
      ratingColor="#ffc205"
      ratingBackgroundColor={theme === 'dark' ? "#192734" : "#f0f0f0"}
      startingValue={media}
      imageSize={20}
      style={{marginRight:15}}
      />
      <Text style={{fontSize:12,color:"#8797a5",marginTop:5}}>
        {voteCount} votos
      </Text>
    </View>
  )
}

const styles=StyleSheet.create({
  movie:{
    marginBottom:20,
    flexDirection:'row',
    alignItems:'center',
  },
  left:{
    marginRight:20,
  },
  image:{
    width:100,
    height:150,
  },
  viewRating:{
    alignItems:'flex-start',
    justifyContent:'flex-start',
    marginTop:10,
  },
})