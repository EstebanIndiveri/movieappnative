import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import NewMovie from '../screens/News';
import Search from '../screens/Search';
import Popular from '../screens/Popular';



const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'TheMovieApp',
        }}
      />
      <Stack.Screen
        name="Movie"
        component={Movie}
        options={{
          title: '',
        }}
      />
      <Stack.Screen
        name="News"
        component={NewMovie}
        options={{
          title: 'Nuevas Peliculas',
        }}
      />
      <Stack.Screen
        name="Popular"
        component={Popular}
        options={{
          title: 'Peliculas Populares',
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: '',
        }}
      />
    </Stack.Navigator>
  );
}
