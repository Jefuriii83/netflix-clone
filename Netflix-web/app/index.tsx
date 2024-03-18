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
} from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { router } from "expo-router";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const image = {
  uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs",
};

export default function App() {
  return (
    <ScrollView className="bg-black flex w-screen h-full">
        <View className="bg-black h-20 flex-row items-center justify-between px-20">
          <Text className="text-white text-4xl">Jetflix</Text>

          <Pressable className="bg-red-600"
          onPress={() => {
            router.navigate({pathname: '/profile/'});
          }}>
            <Text className="text-white px-4 py-2">Sign In</Text>
          </Pressable>
        </View>

        <View className="px-8 pb-8 w-[940px] h-[560px] self-center justify-center items-center">
          <Text className="font-bold text-white text-7xl text-center mb-2">
            Unlimited Movies, TV shows, and more
          </Text>
          <Text className="text-white mb-6 text-base">
            Starts at ₱149. Cancel anytime.
          </Text>
          <Text className="text-white text-base">
            Ready to watch? Enter your email to create or restart your
            membership.
          </Text>
        </View>
    </ScrollView>

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
