import React,{useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer,Switch,TouchableRipple,Text} from 'react-native-paper';

export default function DrawerContent(props) {
    const {navigation}=props;
    const [active, setActive] = useState('Home');
    const onchangeScreen=(screen)=>{
        setActive(screen);
        navigation.navigate(screen);
    }
  return (
    <DrawerContentScrollView>
        <Drawer.Section>
            <Drawer.Item
            label="Inicio"
            active={active==='Home'}
            onPress={()=>onchangeScreen('Home')}
            />
            <Drawer.Item
            label="Peliculas Populares"
            active={active==='Popular'}
            onPress={()=>onchangeScreen('Popular')}
            />
            <Drawer.Item
            label="Nuevas Peliculas"
            active={active==='News'}
            onPress={()=>onchangeScreen('News')}
            />
        </Drawer.Section>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({});
