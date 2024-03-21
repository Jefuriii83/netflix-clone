import React from 'react';
import {FlatList, Image } from 'react-native'; // Import FlatList from react-native
import profiles from '../../../assets/data/profiles';
import { Text, View } from '../Themed';
import { AntDesign } from '@expo/vector-icons';

const MenuProfile = () => {
  return (
    <View className='justify-center items-center py-5 bg-black'>
      <FlatList
        data={profiles.profile}
        renderItem={({ item }) => (
            <View className='p-2 bg-black'>
          <Image source={{ uri: item.avatar }} className='w-20 h-20 rounded-md' />
          <Text>{item.name}</Text>
          </View>
        )}
        numColumns={3}

      />
        <View className='absolute bottom-14 right-16 bg-black'>
        <AntDesign name="pluscircle" size={50} color="gray" />
        </View>
      
    </View>
  );
};

export default MenuProfile;
