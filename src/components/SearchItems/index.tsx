import { FlatList, Image } from 'react-native'
import { Text, View } from '../Themed'
import React from 'react'
import categories from '../../../assets/data/categories'
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const SearchItems = () => {

  return (

    <View>
      <Text className='font-bold text-lg p-1 bg-black text-white'>Recommended TV Shows & Movies</Text>

      {categories.items.map((category) => (
        <FlatList
          key={category.id}
          data={category.movies}
          renderItem={({ item }) => (
            <ScrollView className='bg-black'>
            <View className='flex-row items-center my-1 p-1 justify-between bg-black'>
            <View className="flex-row items-center bg-black">
            <Image className="w-32 h-20 rounded-md" source={{uri: item.poster}}/>
            <Text className='pl-2 text-base font-bold text-white'>{item.title}</Text>
            </View>

            <AntDesign name="play" size={28} color="white" />

            </View>
            </ScrollView>
          )}
        />
      ))}
    </View>
  )
}

export default SearchItems