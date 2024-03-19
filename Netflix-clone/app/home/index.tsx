import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import ProfileCard from "../../src/components/ProfileCard";
import Navbar from "../../src/components/Navbar";
import Card from "../../src/components/Card";
import Footer from "../../src/components/Footer";

import categories from "../../assets/data/categories";
import movie from "../../assets/data/movie";

const homePage = () => {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView className="bg-black">
      <Navbar></Navbar>

      <View className="w-11/12 h-auto self-center flex ">
        {/* Header Card */}
        <View className="h-[590px] w-auto ">
          {/* <Text className="text-white text-5xl text-center ">Header</Text> */}
        </View>

        {/* Cards */}
        <FlatList
          className="overflow-x-hidden"
          data={categories.items}
          renderItem={({ item }) => <Card category={item}></Card>}
        ></FlatList>
      </View>

      <Footer></Footer>
    </ScrollView>
  );
};

export default homePage;