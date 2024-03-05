import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../pages/Login'

const PreLoginRoutes = () => {
    const Stack=createNativeStackNavigator()
    
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default PreLoginRoutes