import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'

const Control = () => {
    const playBackState = usePlaybackState()
    
    console.log(playBackState,'playBackState');
    console.log('State', State)
    
    const skipToNext = async () => {
        console.log('press next');
        
        await TrackPlayer.skipToNext()
    }
    
    const skipToPrevious = async () => {
        console.log('press prev');
        
        await TrackPlayer.skipToPrevious()
    }

    const togglePlayback = async (playback: State) => {
        // const  currentTrack = await TrackPlayer.getCurrentTrack()

        // if (currentTrack !== null) {
            if (playback === State.Paused || playback === State.Ready) {
                await TrackPlayer.play()
            } else {
                await TrackPlayer.pause()
            }
        // }
    }

    return (
        <View>
            <Pressable onPress={skipToPrevious}>
                <Icon
                    name="skip-previous"
                    size={40}
                />
            </Pressable>

            <Pressable onPress={() => togglePlayback(playBackState)}>
                <Icon
                    name={playBackState === State.Playing ? "pause" : "play-arrow"}
                    size={75}
                />
            </Pressable>

            <Pressable onPress={skipToNext}>
                <Icon
                    name="skip-next"
                    size={40}
                />
            </Pressable>
        </View>
    )
}

export default Control

const styles = StyleSheet.create({})