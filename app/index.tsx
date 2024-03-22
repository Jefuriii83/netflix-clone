// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Button,
  Pressable,
  ScrollView,
  ImageBackground,
  Image,
  TextInput
} from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { router } from "expo-router";
import Input from "../src/components/Input";
import { AntDesign } from "@expo/vector-icons";
import categories from "../assets/data/categories";
import { ResizeMode } from "expo-av";
import Footer from "../src/components/Footer";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className="w-full h-full ">
      <ImageBackground
        className="w-full h-full"
        resizeMode="cover"
        source={require("../assets/images/netflix-bg2.jpg")}>
        <View className="bg-[#000000e6] h-20 flex-row items-center justify-between px-36 py-6 w-screen ms:px-8">
          <Text className="text-4xl font-bold text-red-600 font-netflix-medium ms:text-xl ">
            JETFLIX
          </Text>

          <Pressable
            className="bg-red-600 rounded-md"
            onPress={() => {
              router.navigate({ pathname: "/profile/" });
            }}
          >
            <Text className="text-white px-9 py-3 font-medium text-center ms:text-xs ms:px-6">
              Sign In
            </Text>
          </Pressable>
        </View>

        <View className="px-8 pb-8 justify-center items-center my-auto w-screen">
          <Text className="font-bold text-white text-center text-6xl ms:text-3xl">
            Unlimited Movies, TV shows, and more
          </Text>
          <Text className="text-white mb-6 text-2xl text-center py-10">
            Starts at ₱149. Cancel anytime.
          </Text>
          <Text className="text-white text-2xl text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </Text>

          <View className="pt-32 flex-row items-center justify-center gap-x-5 w-full">
            <TextInput className="w-80 h-full bg-black border-[#c4c4c4] border-2 text-[#c4c4c4] p-4 "
              placeholder="Email Address"
            />
            <Pressable
              onPress={() => {}}
              className="bg-red-600 rounded-md hover:bg-red-800"
            >
              <Text className="text-white text-xl p-3 text-center ">
                Get Started
              </Text>
            </Pressable>
          </View>
        </View>
        </ImageBackground>
    </View>

    // <View className="flex-1 items-center justify-center bg-black">
    //   <Text className='text-white'>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />

    //   <TouchableOpacity
    //     onPress={() => router.navigate({pathname: "/profile/[id]", params: { id: "" }})
    //   }
    //   className='bg-white rounded-full p-2 mt-5'
    //   >
    //     <Text>Open Jetflix</Text>
    //   </TouchableOpacity>
    // </View>
  );
}
