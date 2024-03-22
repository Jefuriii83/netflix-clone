import { Pressable } from 'react-native'
import { Text, View } from '../Themed'
import React from 'react'

const MenuOptions = () => {
  return (
    <View className='tablet:items-center tablet:justify-center  bg-black'>
      <View className='bg-gray-900'>

       <View className='bg-gray-900 tablet:mx-[190px] justify-end space-y-4 p-2 '>
      <Pressable>
        <Text className='text-lg text-white tablet:text-xl'>App Setings</Text>
      </Pressable>
      <Pressable>
        <Text className='text-lg text-white tablet:text-xl'>Privacy</Text>
      </Pressable>
      <Pressable>
        <Text className='text-lg text-white tablet:text-xl'>Help</Text>
      </Pressable>
      <Pressable>
        <Text className='text-lg text-white mb-56 tablet:text-xl'>Sign Out</Text>
      </Pressable>
    </View>
    </View>

    </View>
  )
}

export default MenuOptions;