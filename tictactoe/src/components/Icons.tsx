import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

type IconProps = PropsWithChildren<{
    name: string | undefined
}>

const Icons = ({name}: IconProps) => {
  switch (name) {
    case 'circle':
        return <View style={styles.icon}><Icon size={40} name='circle-thin' color="#F7CD2E" /></View>
        break;
        
    case 'cross':
      return <View style={styles.icon}><Icon size={40} name='times' color="#38CC77" /></View>
      break;
  
    default:
      return <View style={styles.icon}><Icon size={20} name='pencil' color="#D3D3D3" /></View>
      break;
  }
}

export default Icons

const styles = StyleSheet.create({
  icon:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100
  }
})