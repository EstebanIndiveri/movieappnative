import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
const Drawer = createDrawerNavigator();
import DraweContent from './DrawerContent';

export default function Navigation() {
  return (
    <Drawer.Navigator initialRouteName="app" drawerContent={(props)=><DraweContent {...props}/>}>
      <Drawer.Screen name="app" component={StackNavigation} />
    </Drawer.Navigator>
  );
}
