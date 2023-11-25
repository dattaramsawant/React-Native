import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Icons from './components/Icons'

export type GameTable = {
  id: number,
  value?: string
}

export type PlayerActive = "cross" | "circle"
const App = () => {
  const [gameTable, setGameTable] = useState<GameTable[]>([
    { id: 1, value: "" }, { id: 2, value: "" }, { id: 3, value: "" }, { id: 4, value: "" }, { id: 5, value: "" }, { id: 6, value: "" }, { id: 7, value: "" }, { id: 8, value: "" }, { id: 9, value: "" }
  ])

  const [playerActive,setPlayerActive]=useState<PlayerActive>("cross")

  const onPressBox=(data:GameTable)=>{
    
  }

  return (
    <View>
      <Text>TIC TAC TOE</Text>

      <Text>Player {playerActive}'s Turn</Text>

      {gameTable?.map((a: GameTable) => {
        return (
          <View key={a?.id}>
            <Pressable onPress={()=>onPressBox(a)}>
              <Icons 
                name={a?.value}
              />
            </Pressable>
          </View>
        )
      })}
    </View>
  )
}

export default App