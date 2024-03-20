import {FlatList, Image, Pressable} from 'react-native'
import {Text, View} from "../../components/Themed"
import React, { useState } from 'react'
import movies from '../../../assets/data/movie';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6, AntDesign, Entypo } from '@expo/vector-icons';
import EpisodeItem from '../../components/EpisodeItem';
import { Picker } from '@react-native-picker/picker';
import VideoPlayer from '../../components/VideoPlayer';


const tvShowSeasonOne = movies.seasons.items[0];
const firstEpisode = tvShowSeasonOne.episodes.items[0];


const TVShowDetails = () => {

  const [currentSeason, setSeason] = useState(tvShowSeasonOne);
  const [currentEpisode, setEpisode] = useState(tvShowSeasonOne.episodes.items[0]);

const seasonNames = movies.seasons.items.map(season => season.name);

  return (

    <View>
      <VideoPlayer episode={currentEpisode}/>

    <FlatList
    className='mb-auto'
    data={currentSeason.episodes.items}
    renderItem={({item}) => <EpisodeItem episode={item} 
    onPress={(episode) => {
      setEpisode(episode);
    }}/>}
    ListHeaderComponent={(  
      <View className='p-[12]'>
      <Text className='text-[26px] font-bold'>{movies.title}</Text>
      <View className='flex-row'>
        <Text className='text-green-500 font-bold mr-2'>92% match</Text>
        <Text className='text-gray-400 mr-2'>{movies.year}</Text>
        <View className='bg-yellow-400 justify-center items-center rounded-md px-2 mr-2'>
          <Text className='font-bold'>16+</Text>
        </View>

        <Text className='text-gray-400'>{movies.numberOfSeasons} Seasons</Text>
        <MaterialIcons name="hd" size={24} color="black" />
        </View>

      <Pressable className="bg-white justify-center items-center p-3 rounded-md mb-2" onPress={() => console.warn('Played')} >
        <Text className="text-black text-base font-bold">
          <FontAwesome6 name="play" size={24} color="black" />
        Play</Text>
        
      </Pressable>
      <Pressable className='bg-gray-500 justify-center items-center p-3 rounded-md mb-2' onPress={() => console.warn('Played')} >
        <Text className='text-white text-base font-bold'>
        <AntDesign className="" name="download" size={24} color="white" />
        Download</Text>
      </Pressable>

      <Text className='my-1'>{movies.plot}</Text>
      <Text>Casts: {movies.cast}</Text>
      <Text>Director: {movies.creator}</Text>

      <View className='flex-row space-x-10'>
        <View className='items-center my-3'>
        <AntDesign className="" name="plus" size={30} color="darkgray" />
          <Text className='text-gray-600'>My List</Text>
        </View>
        <View className='items-center my-3'>
        <AntDesign name="like2" size={30} color="darkgray" />
          <Text className='text-gray-600'>Rate</Text>
        </View>
        <View className='items-center my-3'>
        <Entypo name="share" size={30} color="darkgray" />
          <Text className='text-gray-600'>Share</Text>
        </View>
      </View>

      <View className='border-b-2 border-b-white'></View>

      <Picker 
  selectedValue={currentSeason.name}
  onValueChange={(itemValue, itemIndex) => {
    setSeason(movies.seasons.items[itemIndex])
  }}
  style={{color: 'white', width: 150 }}
  dropdownIconColor={'white'}
  >
    {seasonNames.map(seasonName => (
      <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
    ))}
</Picker>
      </View>
    )}
    />

    </View>
  )
}

export default TVShowDetails