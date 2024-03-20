import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text } from '../../../../src/components/Themed'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Downloads = () => {
  return (
    <View className='flex-1 items-center gap-10'>

      <Text className='font-bold text-base'>My Downloads</Text>
      <Text>Movies and TV Shows that you download appear here.</Text>
      <View className='bg-gray-600 rounded-full p-10'>
      <AntDesign className="" name="download" size={75} color="black" />
      </View>
      <TouchableOpacity className='border border-white p-3'>
        <Text>FIND SOMETHING TO DOWNLOAD</Text>
      </TouchableOpacity>
    </View>
  );
}


export default Downloads;