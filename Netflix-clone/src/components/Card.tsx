import React, { useState } from "react";
import { Modal, Pressable, View, Text, Image, FlatList } from "react-native";
import categories from "../../assets/data/categories";
import movie from "../../assets/data/movie";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

interface HomeProperties {
  category: {
    id: string;
    title: string;
    movies: {
      id: string;
      title: string;
      year: number;
      episodes?: number;
      maturityRating: string;
      description: string;
      poster: string;
      casts: string[];
      genre: string[];
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
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        className="justify-center items-center mt-22"
      >
        <Pressable
          style={{ flex: 1 }}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View className="justify-center items-center mt-22">
            {selectedMovie && (
              <View className="m-20 bg-black bg-opacity-50 rounded-2xl p-9 items-center shadow-lg w-[740px] h-auto to relative ">
                <Pressable
                  onPress={() => setModalVisible(!modalVisible)}
                  className="rounded-2xl p-2 mt-4 absolute right-10"
                >
                  <AntDesign name="closecircleo" size={24} color="#C4C4C4" />
                </Pressable>
                <Image
                  className="w-64 h-96 rounded-xl ms:h-48 ms:w-28 mm:h-48 mm:w-28 ml:h-52 ml:w-28 tablet:h-64 tablet:w-48"
                  source={{ uri: selectedMovie.poster }}
                />
                <View className="w-full h-auto flex-row gap-x-5 bg-slate-500">
                  <View className="flex-col w-3/5">
                    <Text className="text-[#BCBCBC]">{selectedMovie.year}</Text>
                    <Text className="text-[#BCBCBC]">
                      {selectedMovie.episodes}
                    </Text>
                    <Text className="text-white">
                      {selectedMovie.description}
                    </Text>
                    <Text className="text-white">
                      {selectedMovie.maturityRating}
                    </Text>
                  </View>

                  <View className="flex-col w-2/5">
                    <Text className="text-white"> <span className="text-[#bcbcbc]">Cast: </span>{selectedMovie.casts}</Text>
                    <Text className="text-white"> <span className="text[#bcbcbc]">Genre: </span>{selectedMovie.genre}</Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

export default Card;
