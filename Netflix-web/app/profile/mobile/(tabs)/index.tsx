import {
  ImageBackground,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import EditScreenInfo from "../../../../src/components/EditScreenInfo";
import { Text, View } from "../../../../src/components/Themed";
import { Image, FlatList, ScrollView } from "react-native";

import categories from "../../../../assets/data/categories";
import HomeCategories from "../../../../src/components/HomeCategories";
import { Feather, AntDesign, FontAwesome6 } from "@expo/vector-icons";
import HeaderHome from "../../../../src/components/HeaderHome";
import CardButtons from "../../../../src/components/CardButtons";

const TabOneScreen = () => {
  return (
    <ScrollView>
      <View className="mt-5 flex justify-center items-center">
        <Image
          className="h-[500] w-[320]"
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie1.jpg",
          }}
        />


        <HeaderHome title="JetFlix"/>
      <CardButtons />
   

{/* <View className="absolute flex-row h-[50] w-screen top-0 items-center space-x-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
    <Text className="ml-2 text-4xl">Jetflix</Text>
    <Image source={image} className="h-20 w-20" />
    <TouchableOpacity className="border border-white px-2 py-1 rounded-xl">
        <Link href={"/(tabs)/downloads"} className="text-white text-base">TV Shows</Link>
    </TouchableOpacity>
    <TouchableOpacity className="border border-white px-2 py-1 rounded-xl">
        <Link href={"/(tabs)/downloads"} className="text-white text-base">Movies</Link>
    </TouchableOpacity>
    <TouchableOpacity className="border border-white px-2 py-1 rounded-xl">
        <Link href={"/(tabs)/downloads"} className="text-white text-base">My List</Link>
    </TouchableOpacity>
</View> */}

        {/* <View className="absolute bottom-5 flex flex-row space-x-5 items-center">
          <TouchableOpacity className="items-center">
            <Feather name="plus" size={20} color="white" />
            <Text className="text-base">My List</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-center h-10 px-14 space-x-2 bg-gray-600 rounded-md">
            <FontAwesome6 className="" name="play" size={24} color="black" />
            <Text className="text-base text-black font-bold">Play</Text>
          </TouchableOpacity>

          <TouchableOpacity className="justify-center items-center">
            <AntDesign name="infocirlceo" size={20} color="white" />
            <Text className="text-base self-center">Info</Text>
          </TouchableOpacity>
        </View> */}
      </View>
      {/* List of categories */}
      <FlatList
        className="pt-5"
        data={categories.items}
        renderItem={({ item }) => <HomeCategories category={item} />}
      />
    </ScrollView>
  );
};

export default TabOneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
    margin: 5,
  },
});
