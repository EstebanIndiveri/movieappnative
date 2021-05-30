import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {getNewsMoviesApi} from '../api/movies';
import {map} from 'lodash';
import {BASE_PATH_IMG} from '../../utils/constans';
import usePreferences from '../hooks/usePreferences'
const {width} = Dimensions.get('window');

export default function NewMovie(props) {
  const {navigation} = props;
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [showBtnMore, setShowBtnMore] = useState(true);
  const {theme} =usePreferences();
  useEffect(() => {
    getNewsMoviesApi(page).then(res => {
      const totalPages=res.total_pages;
      if(page<totalPages){
        if(!movies){
          setMovies(res.results);
        }else{
          setMovies([...movies,...res.results]);
        }
      }else{
        setShowBtnMore(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <ScrollView>
      <View style={styles.container}>
        {map(movies, (movie, index) => (
          <Movie key={index} movie={movie} navigation={navigation}/>
        ))}
      </View>
      {showBtnMore&&(
        <Button
        mode='contained'
        contentStyle={styles.loadMoreContainer}
        style={styles.loadMore}
        labelStyle={{color:theme==='dark'?'#FFF':'#000'}}
        onPress={()=>setPage(page+1)}
        >
          Cargar Más...
        </Button>
      )}
    </ScrollView>
  );
}

function Movie(props) {
  const {movie,navigation} = props;

  const {title, id, poster_path} = movie;
  const getMovie=()=>{
    navigation.navigate('Movie',{id});
  }
  return (
    <TouchableWithoutFeedback onPress={getMovie}>
    <View style={styles.movie}>
      {poster_path ? (
        <Image
          style={styles.image}
          source={{uri: `${BASE_PATH_IMG}/w500${poster_path}`}}
        />
      ) : (
        <Text>{title}</Text>
      )}
    </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  movie: {
    width: width / 2,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  loadMoreContainer:{
    paddingTop:10,
    paddingBottom:30
  },
  loadMore:{
    backgroundColor:'transparent'
  }
});
