import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

interface HeaderProps {
  title: string;
}

const HeaderHome = ({ title }: HeaderProps) => {
  return (
    <View className="absolute flex-row h-[50] w-screen top-0 items-center space-x-3 bg-black" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
      <Text className="ml-2 text-2xl text-white">{title}</Text>
      <TouchableOpacity className="border border-white px-2 py-1 rounded-xl">
      <Link href={"/(tabs)/downloads"} className="text-white text-base">TV Shows</Link>
      </TouchableOpacity>
      <TouchableOpacity className="border border-white px-2 py-1 rounded-xl">
      <Link href={"/(tabs)/downloads"} className="text-white text-base">Movies</Link>
      </TouchableOpacity>
      <TouchableOpacity className="border border-white px-2 py-1 rounded-xl">
      <Link href={"/(tabs)/downloads"} className="text-white text-base">My List</Link>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderHome;
