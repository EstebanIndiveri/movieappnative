import React from 'react';
import {IconButton} from 'react-native-paper';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import NewMovie from '../screens/News';
import Search from '../screens/Search';
import Popular from '../screens/Popular';

const Stack = createStackNavigator();

export default function StackNavigation(props) {
  const {navigation} = props;
  const buttonLeft = screen => {
    switch (screen) {
      case 'Search':
      case 'Movie':
        return (
          <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
        );
      default:
        return (
          <IconButton icon="menu" onPress={() => navigation.openDrawer()} />
        );
    }
  };
  const buttonRigth = () => {
    return (
      <IconButton
        icon="magnify"
        onPress={() => navigation.navigate('Search')}
      />
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode="float">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'TheMovieApp',
          headerLeft: () => buttonLeft('Home'),
          headerRight: () => buttonRigth(),
        }}
      />
      <Stack.Screen
        name="Movie"
        component={Movie}
        options={{
          title: '',
          headerLeft: () => buttonLeft('Movie'),
          headerRight: () => buttonRigth(),
        }}
      />
      <Stack.Screen
        name="News"
        component={NewMovie}
        options={{
          title: 'Nuevas Peliculas',
          headerLeft: () => buttonLeft('News'),
          headerRight: () => buttonRigth(),
        }}
      />
      <Stack.Screen
        name="Popular"
        component={Popular}
        options={{
          title: 'Peliculas Populares',
          headerLeft: () => buttonLeft('Popular'),
          headerRight: () => buttonRigth(),
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: '',
          headerLeft: () => buttonLeft('Search'),
        }}
      />
    </Stack.Navigator>
  );
}
