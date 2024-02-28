import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home'
import About from '../pages/About'
import { NavigationContainer } from '@react-navigation/native'
import HomeRoutes from './HomeRoutes'

const Stack = createStackNavigator()
const Routes = () => {

    return (
        <NavigationContainer>
            <HomeRoutes />
        </NavigationContainer>
    )
}

export default Routes