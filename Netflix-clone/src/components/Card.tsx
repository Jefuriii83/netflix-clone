import { Pressable, View, Text, Image, FlatList } from "react-native";
import categories from "../../assets/data/categories";
import movie from "../../assets/data/movie";
interface HomeProperties {
  category: {
    id: string;
    title: string;
    movies: {
      id: string;
      poster: string;
    }[];
  };
}

const Card = (props: HomeProperties) => {
  const { category } = props;
  return (
    // <Pressable className="border-black rounded-sm h-[100px] w-[190px] bg-cyan-300 mb-7 mr-2">
    //     <View className="">
    //         {/* <Text>{category.title}</Text> */}
    //     </View>
    // </Pressable>

    <>
      <Text className="text-white text-base font-bold">{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
            <Image 
            className="w-64 h-96 rounded-xl m-1 "
            source={{ uri: item.poster }}></Image>
        )}
        horizontal
      />
    </>
  );
};

export default Card;
