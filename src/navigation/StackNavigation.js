import React from 'react';
import {IconButton} from 'react-native-paper';
import {createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import Home from '../screens/Home';
import Movie from '../screens/Movie';
import NewMovie from '../screens/News';
import Search from '../screens/Search';
import Popular from '../screens/Popular';

const Stack = createStackNavigator();

export default function StackNavigation(props) {
  const {navigation} = props;
  const buttonLeft = () => {
    return <IconButton icon="menu" onPress={() => navigation.openDrawer()} />;
  };

  return (
    <Stack.Navigator
    screenOptions={{
      cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
    }}
    headerMode="float"
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'TheMovieApp',
          headerLeft: () => buttonLeft(),
        }}
      />
      <Stack.Screen
        name="Movie"
        component={Movie}
        options={{
          title: '',
          headerLeft: () => buttonLeft(),
        }}
      />
      <Stack.Screen
        name="News"
        component={NewMovie}
        options={{
          title: 'Nuevas Peliculas',
          headerLeft: () => buttonLeft(),
        }}
      />
      <Stack.Screen
        name="Popular"
        component={Popular}
        options={{
          title: 'Peliculas Populares',
          headerLeft: () => buttonLeft(),
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: '',
          headerLeft: () => buttonLeft(),
        }}
      />
    </Stack.Navigator>
  );
}
