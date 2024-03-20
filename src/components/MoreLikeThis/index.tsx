import { View, Text } from '../Themed'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import categories from '../../../assets/data/categories'
import { Image } from 'react-native'

const MoreLikeThis = () => {

    const series = categories.items[0];

  return (
    <View className='justify-center items-center'>
    <FlatList
    className=''
        data={series.movies}
        renderItem={({item}) => (
            <Image className="w-[13vh] h-[20vh] object-cover rounded-md m-1 items-center justify-center" source={{uri: item.poster}}/>
        )    
    }
    numColumns={3}
      />

</View>

  )
}

export default MoreLikeThis