import { FlatList, Image, Pressable, Dimensions, Platform } from "react-native";
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

  const isWeb = Platform.OS === 'web';

  const routes = [
    { key: 'episodes', title: 'Episodes' },
    { key: 'moreLikeThis', title: 'More Like This' },
    { key: 'reviews', title: 'Reviews' },
  ];

  const renderScene = SceneMap({
    episodes: () => (
      <FlatList
        className="mb-auto bg-black"
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
            style={{ color: 'white', width: 150, backgroundColor:"black"}}
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
        scrollEnabled={false}
      />
    ),
    moreLikeThis: MoreLikeThis,
    reviews: () => (
      <View className="bg-black">
      <View className='items-end bg-black'>
        <TouchableOpacity
          className='bg-gray-600 p-3 w-32 rounded-lg my-2 items-center justify-center'
        >
          <Text>Write a review</Text>
        </TouchableOpacity>
        <ReviewItem />
      </View>
      </View>
    ),
  });

//   return isWeb ? (
// <View className="flex-1 bg-black flex-row">
//       {/* Left Column */}
//       <View className="w-1/2">
//         <ScrollView className="h-96">
//           <View className="bg-black">
//             <VideoPlayer episode={currentEpisode} />
//             <View className="p-[12] bg-black">
//               <Text className="text-[26px] font-bold text-white">{movies.title}</Text>
//               <View className="flex-row bg-black items-center pb-2">
//                 <Text className="text-green-500 font-bold mr-2">92% match</Text>
//                 <Text className="text-gray-400 mr-2">{movies.year}</Text>
//                 <View className="bg-gray-400 justify-center items-center rounded-md p-1 mr-2">
//                   <Text className="font-bold text-[12px]">16+</Text>
//                 </View>
//                 <Text className="text-gray-400">{movies.numberOfSeasons} Seasons</Text>
//                 <MaterialIcons name="hd" size={24} color="black" />
//               </View>
//               <Pressable
//                 className="bg-white justify-center items-center p-3 rounded-md mb-2"
//                 onPress={() => console.warn('Played')}
//               >
//                 <Text className="text-black text-base font-bold"><FontAwesome6 name="play" size={24} color="black" /> Play</Text>
//               </Pressable>
//               <Pressable
//                 className="bg-gray-500 justify-center items-center p-3 rounded-md mb-2"
//                 onPress={() => console.warn('Played')}
//               >
//                 <Text className="text-white text-base font-bold"><AntDesign name="download" size={24} color="white" /> Download</Text>
//               </Pressable>
//               <Text className="my-1 text-white">{movies.plot}</Text>
//               <Text className="text-gray-400">Casts: {movies.cast}</Text>
//               <Text className="text-gray-400">Director: {movies.creator}</Text>
//               <View className="flex-row space-x-10 bg-black">
//                 <View className="items-center my-3 w-15 bg-black">
//                   <AntDesign name="plus" size={30} color="white" />
//                   <Text className="white">My List</Text>
//                 </View>
//                 <View className="items-center my-3 w-15 bg-black">
//                   <AntDesign name="like2" size={30} color="white" />
//                   <Text className="white">Rate</Text>
//                 </View>
//                 <View className="items-center my-3 w-15 bg-black">
//                   <Entypo name="share" size={30} color="white" />
//                   <Text className="white">Share</Text>
//                 </View>
//               </View>
//               <View className="border-b-2 border-b-gray-400"></View>
//             </View>
//           </View>
//         </ScrollView>
//       </View>

//       {/* Right Column */}
//       <View className="w-1/2 h-screen">
//         <TabView
//           navigationState={{ index, routes }}
//           renderScene={renderScene}
//           onIndexChange={setIndex}
//           initialLayout={{ width: Dimensions.get('window').width }}
//           renderTabBar={(props) => (
//             <TabBar
//               {...props}
//               style={{ backgroundColor: 'black'}}
//               indicatorStyle={{ backgroundColor: 'red', top: 0 }}
//             />
//           )}
//         />
//       </View>
//     </View>


    
//   ) : (

//     <View className="flex-1 bg-black">
//   <ScrollView className="h-96">
//       <View className="bg-black">
//         <VideoPlayer episode={currentEpisode} />
//         <View className="p-[12] bg-black">
//           <Text className="text-[26px] font-bold text-white">{movies.title}</Text>
//           <View className="flex-row bg-black items-center pb-2">
//             <Text className="text-green-500 font-bold mr-2">92% match</Text>
//             <Text className="text-gray-400 mr-2">{movies.year}</Text>
//             <View className="bg-gray-400 justify-center items-center rounded-md p-1 mr-2">
//               <Text className="font-bold text-[12px]">16+</Text>
//             </View>
//             <Text className="text-gray-400">{movies.numberOfSeasons} Seasons</Text>
//             <MaterialIcons name="hd" size={24} color="black" />
//           </View>
//           <Pressable
//             className="bg-white justify-center items-center p-3 rounded-md mb-2"
//             onPress={() => console.warn('Played')}
//           >
//             <Text className="text-black text-base font-bold"><FontAwesome6 name="play" size={24} color="black" /> Play</Text>
//           </Pressable>
//           <Pressable
//             className="bg-gray-500 justify-center items-center p-3 rounded-md mb-2"
//             onPress={() => console.warn('Played')}
//           >
//             <Text className="text-white text-base font-bold"><AntDesign name="download" size={24} color="white" /> Download</Text>
//           </Pressable>
//           <Text className="my-1 text-white">{movies.plot}</Text>
//           <Text className="text-gray-400">Casts: {movies.cast}</Text>
//           <Text className="text-gray-400">Director: {movies.creator}</Text>
//           <View className="flex-row space-x-10 bg-black">
//             <View className="items-center my-3 w-15 bg-black">
//               <AntDesign name="plus" size={30} color="white" />
//               <Text className="white">My List</Text>
//             </View>
//             <View className="items-center my-3 w-15 bg-black">
//               <AntDesign name="like2" size={30} color="white" />
//               <Text className="white">Rate</Text>
//             </View>
//             <View className="items-center my-3 w-15 bg-black">
//               <Entypo name="share" size={30} color="white" />
//               <Text className="white">Share</Text>
//             </View>
//           </View>
//           <View className="border-b-2 border-b-gray-400"></View>
    
          

//         </View>

        
       
//       </View>
//       <View className="h-screen">
//       <TabView
//         navigationState={{ index, routes }}
//         renderScene={renderScene}
//         onIndexChange={setIndex}
//         initialLayout={{ width: Dimensions.get('window').width }}
//         renderTabBar={(props) => (
//           <TabBar
//             {...props}
//             style={{ backgroundColor: 'black'}}
//             indicatorStyle={{ backgroundColor: 'red', top: 0 }}
//           />
//         )}
//       />

// </View>
//   </ScrollView>
//     </View>
    
//   )


return (
  <View className="flex-1 bg-black">
  <ScrollView className="h-96">
       <View className="bg-black">
       <VideoPlayer episode={currentEpisode} />
        <View className="p-[12] bg-black">
         <Text className="text-[26px] font-bold text-white">{movies.title}</Text>
          <View className="flex-row bg-black items-center pb-2">
            <Text className="text-green-500 font-bold mr-2">92% match</Text>
            <Text className="text-gray-400 mr-2">{movies.year}</Text>
             <View className="bg-gray-400 justify-center items-center rounded-md p-1 mr-2">
             <Text className="font-bold text-[12px]">16+</Text>
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
           <Text className="my-1 text-white">{movies.plot}</Text>
           <Text className="text-gray-400">Casts: {movies.cast}</Text>
           <Text className="text-gray-400">Director: {movies.creator}</Text>
           <View className="flex-row space-x-10 bg-black">
             <View className="items-center my-3 w-15 bg-black">
               <AntDesign name="plus" size={30} color="white" />
              <Text className="white">My List</Text>
             </View>
             <View className="items-center my-3 w-15 bg-black">
               <AntDesign name="like2" size={30} color="white" />
               <Text className="white">Rate</Text>
             </View>
             <View className="items-center my-3 w-15 bg-black">
               <Entypo name="share" size={30} color="white" />
               <Text className="white">Share</Text>
             </View>
           </View>
           <View className="border-b-2 border-b-gray-400"></View>
    
          

         </View>

        
       
</View>
       <View className="h-screen">
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
   </ScrollView>   
     </View>
)
};

export default TVShowDetails;
