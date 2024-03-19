import { View, Text, Image } from 'react-native'
import React from 'react'
import movies from '../../assets/data/movie';

const firstEpisode = movies.seasons.items[0].episodes.items[0];

const TVShowDetails = () => {
  return (
    <View>
      <Image className='w-[100%] h-[50%]' source={{uri: firstEpisode.poster }}/>
    </View>
  )
}

export default TVShowDetails