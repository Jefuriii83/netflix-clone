import { Image } from 'react-native'
import { View, Text } from '../Themed';
import React from 'react'
import profiles from '../../../assets/data/profiles';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';



const ReviewItem = () => {

const avatars = profiles.profile;


  return (

    <View className="flex-row gap-2 justify-center p-1">
      <View>
      <Image className="w-6 h-6 rounded-md" source={{uri: avatars[0].avatar}}/>
      </View>
      <View className='flex-1 m-2 space-y-2'>
        <Text className='font-bold'>Johnrey</Text>
        <Text >This series is amazing, I want to watch it again</Text>
        <View className='flex-row space-x-5'>
        <AntDesign name="like2" size={20} color="white" />
        <AntDesign name="dislike2" size={20} color="white" />
        </View>
      </View>
      <View className='flex-row gap-1 '>
      <Text className='text-[10px]'>March 25, 2024</Text>
      <AntDesign name="exclamationcircleo" size={10} color="white" />
      </View>
  </View>
  )
} 

export default ReviewItem