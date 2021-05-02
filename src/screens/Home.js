import React, {useState, useEffect} from 'react';

import {View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import {
  getAllGenresApi,
  getNewsMoviesApi,
  getGenreMoviesApi,
} from '../api/movies';
import {Title} from 'react-native-paper';
import CarouselVertical from '../components/CarouselVertical';
import {map} from 'lodash';
import CarouselMulti from '../components/CarouselMulti';

export default function Home(props) {
  const [newMovies, setNewMovies] = useState(null);
  const [genreList, setGenreList] = useState([]);
  const [genreSelected, setGenreSelected] = useState(28);
  const [genreMovies, setGenreMovies] = useState(null);
  const {navigation} = props;
  const getMovies = async () => {
    const data = await getNewsMoviesApi();
    setNewMovies(data.results);
  };
  // Get all movies
  useEffect(() => {
    getMovies();
  }, []);

  // Get all Genres
  useEffect(() => {
    getAllGenresApi().then(response => {
      setGenreList(response.genres);
    });
  }, []);

  // Get movies by GenreSelected
  useEffect(() => {
    getGenreMoviesApi(genreSelected).then(response => {
      setGenreMovies(response.results);
    });
  }, [genreSelected]);

  const onChangeGenre = newGenreId => {
    setGenreSelected(newGenreId);
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      {newMovies && (
        <View style={styles.news}>
          <Title style={styles.newsTitle}>Nuevas Peliculas</Title>
          <CarouselVertical data={newMovies} navigation={navigation} />
        </View>
      )}
      <View style={styles.genres}>
        <Title style={styles.genresTitle}>Peliculas por genero</Title>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.genreList}>
          {map(genreList, genre => (
            <Text
              style={[
                styles.genre,
                // eslint-disable-next-line react-native/no-inline-styles
                {color: genre.id !== genreSelected ? '#8697a5' : '#FFF'},
              ]}
              onPress={() => onChangeGenre(genre.id)}
              key={genre.id}>
              {genre.name}
            </Text>
          ))}
        </ScrollView>
        {genreMovies ? (
          <CarouselMulti data={genreMovies} navigation={navigation} />
        ) : (
        <ActivityIndicator size="small" color="#0000ff" />
        )
      }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  news: {
    marginVertical: 10,
  },
  newsTitle: {
    marginBottom: 15,
    marginHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 22,
  },
  genres: {
    marginTop: 20,
    marginBottom: 50,
  },
  genresTitle: {
    marginHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 22,
  },
  genreList: {
    marginTop: 5,
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  genre: {
    marginRight: 20,
    fontSize: 16,
  },
});
