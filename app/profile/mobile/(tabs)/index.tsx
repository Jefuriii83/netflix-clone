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
    <ScrollView className="bg-black">
      <View className="flex justify-center items-center bg-black">
        <Image
          className="h-[500] w-[320] bg-black"
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/netflix/movie1.jpg",
          }}
        />


        <HeaderHome title="JetFlix"/>
      <CardButtons />
      </View>


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
