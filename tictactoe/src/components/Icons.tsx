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
        return <Icon name='circle-thin' color="#F7CD2E" />
        break;
        
    case 'cross':
      return <Icon name='times' color="#38CC77" />
      break;
      
        
    case 'pencil':
      return <Icon name='pencil' color="#D3D3D3" />
      break;
  
    default:
        break;
  }
}

export default Icons

const styles = StyleSheet.create({})