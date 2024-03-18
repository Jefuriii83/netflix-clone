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

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import { router } from 'expo-router';

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
  
    <View className="flex-1 items-center justify-center bg-black">
      <Text className='text-white'>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <TouchableOpacity
        onPress={() => router.navigate({pathname: "/profile/[id]", params: { id: "" }})
      }
      className='bg-white rounded-full p-2 mt-5'
      >Click Me!
      </TouchableOpacity>
    </View>
  );
};
