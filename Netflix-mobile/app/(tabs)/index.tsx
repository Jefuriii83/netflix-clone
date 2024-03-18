import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text} from '@/components/Themed';
import {Image, FlatList, ScrollView} from 'react-native';
import categories from '../../assets/data/categories';
import HomeCategories from '@/components/HomeCategories';

const  TabOneScreen = () => {
  return (
    <ScrollView>
      {/* List of categories */}
      <FlatList
      data={categories.items}
      renderItem={({item}) => <HomeCategories category={item}/>}
      />
      
    </ScrollView>
  );
  
}

export default TabOneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    margin: 5,

  }
});
