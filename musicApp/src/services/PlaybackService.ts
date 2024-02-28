import TrackPlayer, { Event, RepeatMode } from "react-native-track-player"
import { playListData } from '../constants'

export const setupPlayer=async()=>{
    await TrackPlayer.setupPlayer()
}

export const addTrack=async()=>{
    await TrackPlayer.add(playListData)
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

export const PlaybackService=async()=>{
    TrackPlayer.addEventListener(Event.RemotePlay,()=>TrackPlayer.play());
    
    TrackPlayer.addEventListener(Event.RemotePause,()=>TrackPlayer.pause());
    
    TrackPlayer.addEventListener(Event.RemotePrevious,()=>TrackPlayer.skipToPrevious());
    
    TrackPlayer.addEventListener(Event.RemoteNext,()=>TrackPlayer.skipToNext());
}