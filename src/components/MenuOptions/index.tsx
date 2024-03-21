import { Pressable } from 'react-native'
import { Text, View } from '../Themed'
import React from 'react'

const MenuOptions = () => {
  return (
    <View className=''>

       <View className='bg-gray-700 justify-end space-y-4 p-2'>
      <Pressable>
        <Text className='text-lg'>App Setings</Text>
      </Pressable>
      <Pressable>
        <Text className='text-lg'>Privacy</Text>
      </Pressable>
      <Pressable>
        <Text className='text-lg'>Help</Text>
      </Pressable>
      <Pressable>
        <Text className='text-lg mb-56'>Sign Out</Text>
      </Pressable>
    </View>

    </View>
  )
}

export default MenuOptions;