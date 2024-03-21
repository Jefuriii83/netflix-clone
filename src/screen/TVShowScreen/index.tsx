import { FlatList, Image, Pressable, Dimensions } from "react-native";
import { Text, View } from "../../components/Themed";
import React, { useState } from "react";
import movies from "../../../assets/data/movie";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6, AntDesign, Entypo } from "@expo/vector-icons";
import EpisodeItem from "../../components/EpisodeItem";
import { Picker } from "@react-native-picker/picker";
import VideoPlayer from "../../components/VideoPlayer";
import ReviewItem from "../../components/ReviewItem";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import MoreLikeThis from "../../components/MoreLikeThis";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";

const tvShowSeasonOne = movies.seasons.items[0];
const seasonNames = movies.seasons.items.map((season) => season.name);

const TVShowDetails = () => {
  const [currentSeason, setSeason] = useState(tvShowSeasonOne);
  const [currentEpisode, setEpisode] = useState(tvShowSeasonOne.episodes.items[0]);
  const [index, setIndex] = useState(0);

  const routes = [
    { key: 'episodes', title: 'Episodes' },
    { key: 'moreLikeThis', title: 'More Like This' },
    { key: 'reviews', title: 'Reviews' },
  ];

  const renderScene = SceneMap({
    episodes: () => (
      <FlatList
        className="mb-auto"
        data={currentSeason.episodes.items}
        renderItem={({ item }) => (
          <EpisodeItem
            episode={item}
            onPress={(episode) => {
              setEpisode(episode);
            }}
          />
        )}
        ListHeaderComponent={
          <Picker
            selectedValue={currentSeason.name}
            onValueChange={(itemValue, itemIndex) => {
              setSeason(movies.seasons.items[itemIndex]);
            }}
            style={{ color: 'white', width: 150 }}
            dropdownIconColor={'white'}
          >
            {seasonNames.map((seasonName) => (
              <Picker.Item
                label={seasonName}
                value={seasonName}
                key={seasonName}
              />
            ))}
          </Picker>
        }
      />
    ),
    moreLikeThis: MoreLikeThis,
    reviews: () => (
      <View className='items-end'>
        <TouchableOpacity
          className='bg-gray-600 p-3 w-32 rounded-lg my-2 items-center justify-center'
        >
          <Text>Write a review</Text>
        </TouchableOpacity>
        <ReviewItem />
      </View>
    ),
  });

  return (
    <View className="flex-1 bg-black">
      <View>
        <VideoPlayer episode={currentEpisode} />
        <View className="p-[12]">
          <Text className="text-[26px] font-bold">{movies.title}</Text>
          <View className="flex-row">
            <Text className="text-green-500 font-bold mr-2">92% match</Text>
            <Text className="text-gray-400 mr-2">{movies.year}</Text>
            <View className="bg-yellow-400 justify-center items-center rounded-md px-2 mr-2">
              <Text className="font-bold">16+</Text>
            </View>
            <Text className="text-gray-400">{movies.numberOfSeasons} Seasons</Text>
            <MaterialIcons name="hd" size={24} color="black" />
          </View>
          <Pressable
            className="bg-white justify-center items-center p-3 rounded-md mb-2"
            onPress={() => console.warn('Played')}
          >
            <Text className="text-black text-base font-bold"><FontAwesome6 name="play" size={24} color="black" /> Play</Text>
          </Pressable>
          <Pressable
            className="bg-gray-500 justify-center items-center p-3 rounded-md mb-2"
            onPress={() => console.warn('Played')}
          >
            <Text className="text-white text-base font-bold"><AntDesign name="download" size={24} color="white" /> Download</Text>
          </Pressable>
          <Text className="my-1">{movies.plot}</Text>
          <Text>Casts: {movies.cast}</Text>
          <Text>Director: {movies.creator}</Text>
          <View className="flex-row space-x-10">
            <View className="items-center my-3">
              <AntDesign name="plus" size={30} color="darkgray" />
              <Text className="text-gray-600">My List</Text>
            </View>
            <View className="items-center my-3">
              <AntDesign name="like2" size={30} color="darkgray" />
              <Text className="text-gray-600">Rate</Text>
            </View>
            <View className="items-center my-3">
              <Entypo name="share" size={30} color="darkgray" />
              <Text className="text-gray-600">Share</Text>
            </View>
          </View>
          <View className="border-b-2 border-b-white"></View>
        </View>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={{ backgroundColor: 'black'}}
            indicatorStyle={{ backgroundColor: 'red', top: 0 }}
          />
        )}
      />
    </View>
  );
};

export default TVShowDetails;
