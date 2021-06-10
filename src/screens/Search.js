import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  Platform,
  ScrollView,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {searchMovieApi} from '../api/movies';
import {size, map} from 'lodash';
import { BASE_PATH_IMG } from '../../utils/constans';

export default function Search() {
  const [movies, setMovies] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (size(search) > 2) {
      searchMovieApi(search).then(response => {
        setMovies(response.results);
      });
    }
  }, [search]);

  return (
    <SafeAreaView>
      <Searchbar
        placeholder="Busca tu pelicula"
        iconColor="transparent"
        style={styles.input}
        onChangeText={e => setSearch(e)}
      />
      <ScrollView>
        <View style={styles.container}>
          {map(movies,(movie,index)=>(
            <Movie key={index} movei={movies}/>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
function Movie(){
  return(
    <TouchableWithoutFeedback>
      <Text>HOLA</Text>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  input: {
    marginTop: 3,
    backgroundColor: '#152120',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
