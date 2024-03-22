import { FlatList, ScrollView, Text, View } from "react-native";
import Subheader from "../../../src/components/SubHeader/Subheader";
import categories from "../../../assets/data/categories";
import Card from "../../../src/components/Card";
import Footer from "../../../src/components/Footer";

const myList = () => {
  return (
    <ScrollView>
      {/* <Navbar/> */}

      <View className="w-11/12 mt-5 h-auto self-center flex">
        <View>
          <Text className="text-white text-2xl font-bold pb-4">My List</Text>
        </View>

        {/* Cards */}
        <FlatList
          // className="overflow-x-hidden"
          data={categories.items}
          renderItem={({ item }) => <Card category={item}></Card>}
          showsHorizontalScrollIndicator={false}
        ></FlatList>
      </View>

      <Footer></Footer>
    </ScrollView>
  );
};
export default myList;
