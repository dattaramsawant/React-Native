import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LOGIN_BG from '../assets/login_bg.png'

const PreloginLayout = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.scrollContainer}>
                    <View style={styles.imgContainer}>
                        <View
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.childrenContainer}>
                        <Text style={styles.pageTitle}>{props?.pageTitle}</Text>
                        <View>
                            {props?.children}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PreloginLayout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#313131',
    },
    scrollContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    imgContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: 400,
        position: 'relative',
        padding:10
    },
    img: {
        width: '100%',
        height: '100%',
        backgroundColor: '#a8a8a8',
    },
    childrenContainer: {
        // flex: 1,
        // alignItems: 'center',
        // backgroundColor: 'yellow'
    },
    pageTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#a8a8a8'
    }
})