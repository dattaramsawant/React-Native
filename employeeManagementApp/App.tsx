import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import PreLoginRoutes from './src/routes/PreLoginRoutes'

const App = () => {
  return (
    <NavigationContainer>
      <PreLoginRoutes />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})