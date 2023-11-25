import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react';

type DiceProps = PropsWithChildren<{
    imageUrl: ImageSourcePropType
}>
const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
    return (
        <View>
            <Image style={styles.diceImage} source={imageUrl} />
        </View>
    )
}

export default Dice

const styles = StyleSheet.create({
    diceImage: {
        width: 200,
        height: 200,
    }
})