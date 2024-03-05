import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Input = (props) => {

    return (
        <View>
            <Text>{props?.title}</Text>
            <TextInput
                style={[styles.input,props?.inputStyles]}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        height: 40,
        backgroundColor: '#313131',
        color: '#D3D3D3',
        padding: 10,
        borderRadius: 7
    }
})