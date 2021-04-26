import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Text>APP</Text>
      </SafeAreaView>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FFF',
    flex:1,
  }
})
