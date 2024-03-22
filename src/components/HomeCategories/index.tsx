import { Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text} from '../../components/Themed';
import {Image, FlatList} from 'react-native';
import categories from '../../../assets/data/categories';
import { useNavigation } from '@react-navigation/native';

 
interface HomeProperties {
  category: {
    id: string;
    title: string;
    movies: {
      id: string,
      poster: string,
  }[]
  }
}

const HomeCategories = (props: HomeProperties) => {
const {category} = props;
const navigation = useNavigation();

const onTVShowPress = (movie) => {
  navigation.navigate('TVShowDetails', {id: movie.id})
}

  return (
    <>
      <Text style={styles.title} className='pt-2 ml-1 text-white tablet:text-2xl'>{category.title}</Text>
      <FlatList 
        data={category.movies}
        renderItem={({item}) => (

          <Pressable onPress={() => onTVShowPress(item)}>
              <Image className='w-[100px] h-[150px] object-cover rounded-10 m-1 tablet:w-[200px] tablet:h-[250px]' source={{ uri: item.poster}}></Image>
          </Pressable>

          

        )}
        horizontal
      />
      
    </>
  );
  
}

export default HomeCategories;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize:18,
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