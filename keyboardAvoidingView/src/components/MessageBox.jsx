import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MessageBox = (props) => {
    return (
        <View
            style={[styles.messageContainer, props?.item?.author === 'user' ? styles.userMessageContainer : styles.botMessageContainer]}
        >
            <Text style={{color: 'white'}}>{props?.item?.message}</Text>
        </View>
    )
}

export default MessageBox

const styles = StyleSheet.create({
    messageContainer:{
        maxWidth: '80%',
        borderRadius: 15,
        padding: 10,
    },
    userMessageContainer:{
        alignSelf: 'flex-start',
        backgroundColor: '#121212'
    },
    botMessageContainer:{
        alignSelf: 'flex-end',
        backgroundColor: '#007AFF'
    }
})