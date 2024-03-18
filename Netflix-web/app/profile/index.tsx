import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { NativeWindStyleSheet } from "nativewind";


const profile = () => {
    const { id } = useLocalSearchParams();

    return(
        <View className="flex h-full justify-center bg-black">
            <Text className="text-white text-center">Who's watching?</Text>
        </View>
    )
}

export default profile;