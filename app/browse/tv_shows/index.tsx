import { FlatList, ScrollView, Text, View } from "react-native";
import categories from "../../../assets/data/categories";
import Footer from "../../../src/components/Footer";
import Card from "../../../src/components/Card";
import Subheader from "../../../src/components/SubHeader/Subheader";

const tvShows = () => {
  return (
    <ScrollView>
      {/* <Navbar/> */}
      <Subheader genreTitle="TV Shows"/>

      <View className="w-11/12 mt-5 h-auto self-center flex">
        

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

export default tvShows
