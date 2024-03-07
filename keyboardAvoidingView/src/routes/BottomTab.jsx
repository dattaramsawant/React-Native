import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabOne from '../pages/TabOne'
import TabTwo from '../pages/TabTwo'
import color from '../utils/color'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTab = () => {
    const Tab = createBottomTabNavigator()
    const colorScheme = useColorScheme()

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: color[colorScheme ?? "light"].tint,
                headerShown: false
            }}
        >
            <Tab.Screen
                name='TabOne'
                component={TabOne}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen 
                name="TabTwo" 
                component={TabTwo} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({})