import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {BASE_PATH_IMG} from '../../utils/constans';
import {getMovieByIdApi} from '../api/movies';
export default function Movie(props) {
  const {route} = props;
  const {id} = route.params;
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMovieByIdApi(id).then(response => {
      setMovie(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ScrollView>
        <MovieImage posterPath={movie?.poster_path} />
      </ScrollView>
    </>
  );
}

function MovieImage(props) {
  const {posterPath} = props;
  const urlImage = `${BASE_PATH_IMG}/w500${posterPath}`;
  return (
    <View style={styles.viewPoster}>
      <Image style={styles.poster} source={{uri: urlImage}} />
    </View>
  );
}
const styles = StyleSheet.create({
  poster: {
    width: '100%',
    height: 500,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  viewPoster: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});
