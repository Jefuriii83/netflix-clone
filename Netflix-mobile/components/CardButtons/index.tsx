import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Feather, AntDesign, FontAwesome6 } from '@expo/vector-icons';

const CardButtons = () => {
  return (
    <View className="absolute bottom-5 flex flex-row space-x-5 items-center">
      <TouchableOpacity className="items-center">
        <Feather name="plus" size={20} color="white" />
        <Text className="text-base text-white">My List</Text>
      </TouchableOpacity>
      <TouchableOpacity className="flex-row items-center justify-center h-10 px-14 space-x-2 bg-gray-600 rounded-md">
        <FontAwesome6 className="" name="play" size={24} color="black" />
        <Text className="text-base text-black font-bold">Play</Text>
      </TouchableOpacity>
      <TouchableOpacity className="justify-center items-center">
        <AntDesign name="infocirlceo" size={20} color="white" />
        <Text className="text-base self-center text-white">Info</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardButtons;
