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
} from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { router } from "expo-router";
import Input from "../src/components/Input";
import { AntDesign } from '@expo/vector-icons';

NativeWindStyleSheet.setOutput({
  default: "native",
});

const image = {
  uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs",
};

export default function App() {
  return (
    <View className="h-screen w-full flex bg-black">
      <View className="h-20 pt-5 flex-row items-center justify-between px-20 ms:px-8 mm:px-9 ml:px-10 ls: ll: xl:px-20 xl:py-20">
        <Text className="text-4xl font-bold text-red-600 ms:text-2xl mm:text-2xl ml:text-2xl tablet:text-3xl ls:text-4xl ll:text-5xl xl:text-6xl">
          JETFLIX
        </Text>

        <Pressable
          className="bg-red-600 rounded-md hover:bg-red-700"
          onPress={() => {
            router.navigate({ pathname: "/profile/" });
          }}
        > 
          <Text className="text-white px-9 py-6 font-medium text-center ms:text-xs mm:text-xs ll:text-xl xl:text-4xl">
            Sign In
          </Text>
        </Pressable>
      </View>

      <View className="px-8 pb-8 justify-center items-center my-auto">
        <Text className="font-bold text-white text-center text-6xl ms:text-3xl mm:text-4xl ml:text-4xl tablet:text-5xl ls:text-6xl ll:text-7xl xl:text-8xl ">
          Unlimited Movies, TV shows, and more
        </Text>
        <Text className="text-white mb-6 text-base text-center py-10 ms:text-base mm:text-base ml:text-lg tablet:text-xl ls:text-xl ll:text-3xl xl:text-5xl">
          Starts at ₱149. Cancel anytime.
        </Text>
        <Text className="text-white text-base text-center ms:text-base mm:text-base ml:text-lg tablet:text-xl ls:text-xl ll:text-2xl xl:text-4xl">
          Ready to watch? Enter your email to create or restart your membership.
        </Text>

        <View className="pt-32 flex-row items-center justify-center gap-x-5">
          <Pressable onPress={() => {}}
          className="bg-red-600 rounded-md"
          >
            <Text className="text-white text-4xl p-4 text-center ms:text-sm mm:text-sm ml:text-base tablet:text-base ls:text-base ll:text-2xl xl:text-5 xl">Get Started</Text>
          </Pressable>
        </View>
      </View>
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
