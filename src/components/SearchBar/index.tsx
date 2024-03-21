import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  const [text, setText] = useState('');

  const handleClearText = () => setText('');

  return (
    <View className="relative m-4 flex-row justify-center bg-black">
      <View className="flex-row items-center border border-gray-300 rounded bg-gray-700 relative w-11/12 mx-1">
        <TextInput
          className="flex-1 h-10 px-4 bg-transparent text-white"
          value={text}
          onChangeText={setText}
          placeholder="Search here..."
          placeholderTextColor="#999"
        />
        {text && <Feather name="x" size={24} color="gray" onPress={handleClearText} className="mr-2 absolute right-0" />}
      </View>
      <View className='justify-center items-center'>
      <Feather name="search" size={30} color="white" className="absolute top-5 right-0 mr-4 mt-5" />
      </View>
    </View>
  );
};

export default SearchBar;
