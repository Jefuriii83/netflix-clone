import { Image } from 'react-native'
import { View, Text } from '../Themed';
import React from 'react'
import profiles from '../../../assets/data/profiles';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';



const ReviewItem = () => {

const avatars = profiles.profile;


  return (
 

    <View className="flex-row gap-2 justify-center self-center p-1 bg-black">
      <View className='bg-black'>
      <Image className="w-6 h-6 rounded-md" source={{uri: avatars[0].avatar}}/>
      </View>
      <View className='flex-1 m-2 space-y-2 bg-black'>
        <Text className='font-bold text-white'>Johnrey</Text>
        <Text className='text-white'>This series is amazing, I want to watch it again</Text>
        <View className='flex-row space-x-5 bg-black'>
        <AntDesign name="like2" size={20} color="white" />
        <AntDesign name="dislike2" size={20} color="white" />
        </View>
      </View>
      <View className='flex-row gap-1 bg-black'>
      <Text className='text-[10px] text-gray-400'>March 25, 2024</Text>
      <AntDesign name="exclamationcircleo" size={10} color="white" />
      </View>
  </View>

  )
} 

export default ReviewItem