import { ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Dice from './Dice'
import DiceOne from '../assets/one.jpg'
import DiceTwo from '../assets/two.jpg'
import DiceThree from '../assets/three.jpg'
import DiceFour from '../assets/four.jpg'
import DiceFive from '../assets/five.jpg'
import DiceSix from '../assets/six.jpg'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const App = () => {
  const [diceImg, setDiceImg] = useState<ImageSourcePropType>(DiceOne)

  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false
  };

  const rollDiceOnTop = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImg(DiceOne)
        break;

      case 2:
        setDiceImg(DiceTwo)
        break;

      case 3:
        setDiceImg(DiceThree)
        break;

      case 4:
        setDiceImg(DiceFour)
        break;

      case 5:
        setDiceImg(DiceFive)
        break;

      case 6:
        setDiceImg(DiceSix)
        break;

      default:
        setDiceImg(DiceOne)
        break;
    }

    ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImg} />

      <Pressable onPress={rollDiceOnTop}>
        <Text style={styles.rollDiceBtnText}>
          Roll the Dice
        </Text>
      </Pressable>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  }
})