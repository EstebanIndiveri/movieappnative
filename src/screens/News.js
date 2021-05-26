import React,{useEffect,useState} from 'react';
import {View,StyleSheet,ScrollView,Dimensions,Image,TouchableWithoutFeedback} from 'react-native';
import {Button,Text} from 'react-native-paper'
import { getNewsMoviesApi } from '../api/movies';
import {map} from 'lodash';
import { BASE_PATH_IMG } from '../../utils/constans';

const{width}=Dimensions.get('window');

export default function NewMovie(props) {
  const{navigation}=props;
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    getNewsMoviesApi(page).then((res)=>{
      setMovies(res.results);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        {map(movies,(movie,index)=>(<Movie key={index} movie={movie}/>))}
      </View>
    </ScrollView>
  );
}

function Movie(props){
  const{movie}=props;

  const{title,id, poster_path}=movie;

  return(
    <View style={styles.movie}
    >
      {poster_path?(
      <Image
      style={styles.image}
      source={{uri:`${BASE_PATH_IMG}/w500${poster_path}`}}
      />
    ):(
      <Text>{title}</Text>
    )}
    </View>
  );

}
const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
  },
  movie:{
    width:width / 2,
    height:300,
    justifyContent:'center',
    alignItems:'center',
  },
  image:{
    width:'100%',
    height:'100%',
  }
})