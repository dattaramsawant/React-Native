import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes/Routes'

const App = () => {
  return (
    // <SafeAreaView>
      // <NavigationContainer>
        <Routes />
      // </NavigationContainer>
    // </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})