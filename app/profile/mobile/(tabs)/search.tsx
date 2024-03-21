import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../../../src/components/EditScreenInfo';
import { Text, View } from '../../../../src/components/Themed';
import SearchBar from '../../../../src/components/SearchBar';
import SearchItems from '../../../../src/components/SearchItems';

export default function TabTwoScreen() {
  return (
   <View className='flex-1 bg-black'>
    <SearchBar />
    <SearchItems />
   </View>
  );
}

