import React, { useState } from "react";
import { Modal, Pressable, View, Text, Image, FlatList } from "react-native";
import categories from "../../assets/data/categories";
import movie from "../../assets/data/movie";
import { router } from "expo-router";
import { AntDesign, Entypo, EvilIcons, Octicons } from "@expo/vector-icons";
import MoreLikeThis from "./MoreLikeThis";
import { ScrollView } from "react-native-gesture-handler";

interface HomeProperties {
  category: {
    id: string;
    title: string;
    movies: {
      id: string;
      title?: string;
      year?: number;
      episodes?: number;
      maturityRating?: string;
      description?: string;
      poster?: string;
      banner?: string;
      casts?: string[];
      genre?: string[];
    }[];
  };
}

const Card = (props: HomeProperties) => {
  const { category } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>
      <Text className="text-white text-base font-bold ms:text-sm">
        {category.title}
      </Text>

      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              setSelectedMovie(item);
              setModalVisible(true);
            }}
            className="w-64 h-96 rounded-xl ms:h-48 ms:w-28 mm:h-48 mm:w-28 ml:h-52 ml:w-28 tablet:h-64 tablet:w-48"
          >
            <Image
              source={{ uri: item.poster }}
              className="w-64 h-96 rounded-xl m-1"
            />
          </Pressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View className="flex justify-center items-center m-auto relative  border-2 border-white">
          {selectedMovie && (
            <View className="bg-black rounded-2xl w-auto px-10 h-auto">
              <Pressable
                onPress={() => setModalVisible(!modalVisible)}
                className="rounded-2xl absolute right-20 top-10 z-10"
              >
                <AntDesign name="closecircleo" size={30} color="#C4C4C4" />
              </Pressable>
              <Image
                className="mt-5 w-full h-96 self-center rounded-xl ms:h-48 ms:w-28 mm:h-48 mm:w-28 ml:h-52 ml:w-28 tablet:h-64 tablet:w-48"
                source={{ uri: selectedMovie.banner }}
              />
              <View className="h-12 flex-row items-center relative">
                <Pressable className="bg-white w-32 h-full rounded-md flex-row justify-center items-center">
                  <Entypo name="controller-play" size={30} color="black" />
                  <Text className="text-base font-medium">Play</Text>
                </Pressable>
                <Pressable className="h-full items-center justify-center p-4 ">
                  <AntDesign name="checkcircleo" size={30} color="#909090" />
                </Pressable>
                <Pressable className="items-center justify-center border rounded-full ">
                  <EvilIcons name="like" size={30} color="#909090" />
                </Pressable>
                <Pressable className="h-30 items-center justify-center right-10 border rounded-full p-2 absolute">
                  <Octicons name="mute" size={24} color="#909090" />
                </Pressable>
              </View>

              <View className=" w-full flex-row pt-6">
                <View className="flex-col  w-3/5 ">
                  <View className="flex-row gap-x-6">
                    <Text className="text-[#BCBCBC] text-base ">
                      {selectedMovie.year}
                    </Text>
                    <Text className="text-[#BCBCBC] text-base">
                      {selectedMovie.episodes} episodes
                    </Text>
                  </View>

                  <Text className="text-white py-0.5 my-2 text-base border-2 border-[#BCBCBC] w-16 text-center r">
                    {selectedMovie.maturityRating}
                  </Text>
                  <Text className="text-white w-96">
                    {selectedMovie.description}
                  </Text>
                </View>

                <View className="flex-col w-2/5">
                  <Text className="text-white">
                    <Text className="text-[#BCBCBC]">Cast:</Text>{" "}
                    {selectedMovie.casts}
                  </Text>
                  <Text className="text-white">
                    <Text className="text-[#BCBCBC]">Genre:</Text>{" "}
                    {selectedMovie.genre}
                  </Text>
                </View>
              </View>

              <View className="py-5">
                <Text className="text-white font-bold text-lg">
                  More Like This
                </Text>
                <MoreLikeThis />
              </View>

              <View className="py-5 border-t-2 border-white">
                <Text className="text-2xl text-white  ">
                  About <Text className="font-bold">{selectedMovie.title}</Text>
                </Text>
                <Text className="text-[#BCBCBC]">Creators: </Text>
                <Text className="text-[#BCBCBC]">
                  Cast: {selectedMovie.casts}
                </Text>
                <Text className="text-[#BCBCBC]">
                  Genres: {selectedMovie.genre}
                </Text>
                <Text className="text-[#BCBCBC]">
                  Maturity rating: {selectedMovie.maturityRating}
                </Text>
              </View>
            </View>
          )}
        </View>
      </Modal>
    </>
  );
};

export default Card;
