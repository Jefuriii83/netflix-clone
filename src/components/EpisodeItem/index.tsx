import { Image } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons';
import {Text, View} from "../Themed"
import { Pressable } from 'react-native';


interface EpisodeProp {
  episode: {
      id: string,
      title: string,
      poster: string,
      duration: string,
      plot: string,
      video: string,
  },
  onPress: (episode: {
      id: string,
      title: string,
      poster: string,
      duration: string,
      plot: string,
      video: string,
  }) => void
}


const EpisodeItem = (props: EpisodeProp) => {

    const {episode, onPress} = props;

  return (
    <Pressable className='m-2 bg-black' onPress={() => onPress(episode)}>
        <View className='flex-row justify-between items-center mb-5 bg-black'>
            <Image className="h-20 aspect-[16/9] rounded-md object-cover bg-black tablet:h-32" source={{uri: episode.poster}}/>
            <View className='flex-1 p-3 justify-center bg-black'>
                <Text className='text-white'>{episode.title}</Text>
                <Text className='text-gray-500 text-sm '>{episode.duration}</Text>
            </View>
            <AntDesign className="" name="download" size={24} color="white" />
        </View>
      <Text className='text-gray-500'>{episode.plot}</Text>
    </Pressable>
  )
}

export default EpisodeItem