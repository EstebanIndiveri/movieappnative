import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import {IconButton} from 'react-native-paper';
import {BASE_PATH_IMG} from '../../utils/constans';
import {getMovieByIdApi} from '../api/movies';
import ModalVideo from '../components/ModalVideo';

export default function Movie(props) {
  const {route} = props;
  const {id} = route.params;
  console.log(id);
  const [movie, setMovie] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    getMovieByIdApi(id).then(response => {
      setMovie(response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!movie) return null;
  return (
    <>
      <ScrollView>
        <MovieImage posterPath={movie?.poster_path} />
        <MovieTrailer setShowVideo={setShowVideo} />
      </ScrollView>
      <ModalVideo idMovie={id} show={showVideo} setShow={setShowVideo} />
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
function MovieTrailer(props) {
  const {setShowVideo} = props;
  return (
    <View style={styles.viewPlay}>
      <IconButton
        icon="play"
        color="#000"
        size={30}
        style={styles.play}
        onPress={() => setShowVideo(true)}
      />
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
  play: {
    backgroundColor: '#FFF',
    marginTop: -40,
    marginRight: 30,
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  viewPlay: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
