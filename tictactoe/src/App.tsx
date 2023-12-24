import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Fragment, useEffect, useState } from 'react'
import Icons from './components/Icons'
import { trigger } from 'react-native-haptic-feedback'

export type GameTable = {
  id: number,
  value?: string
}

export type PlayerActive = "cross" | "circle" | ""
const App = () => {
  const [gameTable, setGameTable] = useState<GameTable[]>([
    { id: 1, value: "" }, { id: 2, value: "" }, { id: 3, value: "" }, { id: 4, value: "" }, { id: 5, value: "" }, { id: 6, value: "" }, { id: 7, value: "" }, { id: 8, value: "" }, { id: 9, value: "" }
  ])

  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  const [playerActive, setPlayerActive] = useState<PlayerActive>("cross")
  const [winnerPlayerName, setWinnerPlayerName] = useState<PlayerActive>("")

  const onPressBox = (data: GameTable, i: number) => {
    if (!data?.value && !winnerPlayerName) {
      const duplicateData = gameTable;
      duplicateData[i].value = playerActive
      setGameTable(duplicateData)

      setPlayerActive(playerActive === 'cross' ? 'circle' : 'cross')

      trigger("impactLight", options)
    }
  }

  const findTheWinner = (getCrossValue: number[], getCircleValue: number[]) => {
    let isWon = false;

    while (!isWon) {
      if (getCrossValue.length >= 3 || getCircleValue.length >= 3) {
        if ((getCrossValue.includes(1) && getCrossValue.includes(2) && getCrossValue.includes(3)) || 
        (getCrossValue.includes(4) && getCrossValue.includes(5) && getCrossValue.includes(6)) || 
        (getCrossValue.includes(7) && getCrossValue.includes(8) && getCrossValue.includes(9)) ||
        (getCrossValue.includes(1) && getCrossValue.includes(4) && getCrossValue.includes(7)) || 
        (getCrossValue.includes(2) && getCrossValue.includes(5) && getCrossValue.includes(8)) || 
        (getCrossValue.includes(3) && getCrossValue.includes(6) && getCrossValue.includes(9)) || 
        (getCrossValue.includes(1) && getCrossValue.includes(5) && getCrossValue.includes(9)) || 
        (getCrossValue.includes(3) && getCrossValue.includes(5) && getCrossValue.includes(7))) {
          isWon = true
          setWinnerPlayerName('cross')
          setPlayerActive('cross')
        } else if ((getCircleValue.includes(1) && getCircleValue.includes(2) && getCircleValue.includes(3)) || 
        (getCircleValue.includes(4) && getCircleValue.includes(5) && getCircleValue.includes(6)) || 
        (getCircleValue.includes(7) && getCircleValue.includes(8) && getCircleValue.includes(9)) ||
        (getCircleValue.includes(1) && getCircleValue.includes(4) && getCircleValue.includes(7)) || 
        (getCircleValue.includes(2) && getCircleValue.includes(5) && getCircleValue.includes(8)) || 
        (getCircleValue.includes(3) && getCircleValue.includes(6) && getCircleValue.includes(9)) || 
        (getCircleValue.includes(1) && getCircleValue.includes(5) && getCircleValue.includes(9)) || 
        (getCircleValue.includes(3) && getCircleValue.includes(5) && getCircleValue.includes(7))){
          isWon = true
          setWinnerPlayerName('circle')
          setPlayerActive('circle')
        } else {
          isWon = false
        }
      }
    }
  }

  const onRestartGame = () => {
    setWinnerPlayerName('')
    setPlayerActive(winnerPlayerName)
  }

  useEffect(() => {
    const getCrossValue = gameTable.filter(a => a.value === 'cross')?.map(a => a.id)
    const getCircleValue = gameTable.filter(a => a.value === 'circle')?.map(a => a.id)

    if ((getCrossValue.length >= 3 || getCircleValue.length >= 3) && !winnerPlayerName) {
      findTheWinner(getCrossValue, getCircleValue)
    }
  }, [gameTable, playerActive])

  return (
    <View>
      <Text>TIC TAC TOE</Text>

      <Text>Player {playerActive}'s Turn</Text>

      <View style={styles.boxContainer}>
        {gameTable?.map((a: GameTable, i: number) => {
          return (
            <View key={a?.id} style={styles.box}>
              <Pressable onPress={() => onPressBox(a, i)} style={styles.press}>
                <Icons
                  name={a?.value}
                />
              </Pressable>
            </View>
          )
        })}
      </View>

      {winnerPlayerName &&
        <View>
          <Text>Player {winnerPlayerName} is won</Text>
          <Pressable onPress={onRestartGame}>
            <Text>Restart</Text>
          </Pressable>
        </View>
      }
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  boxContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: 400,
    padding: 50
  },
  box: {
    width: 100,
    height: 100,
    borderColor: 'yellow',
    borderStartWidth: 2,
    borderEndWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  press: {
    width: 100,
    height: 100
  }
})