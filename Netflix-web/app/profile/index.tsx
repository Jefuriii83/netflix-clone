import { useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
// import { NativeWindStyleSheet } from "nativewind";
import ProfileCard from "../../src/components/ProfileCard";


const profile = () => {
    const { id } = useLocalSearchParams();

    return(
        <View className=" bg-black flex h-full w-full items-center justify-center">
            <Text className="text-white text-center text-6xl my-7 ms:text-3xl ms:my-5 mm:text-3xl ml:text-3xl ml:my-5 tablet:text-3xl ls:text-4xl ll:text-6xl">Who's watching?</Text>
            {/* AvatarCard */}
            <View className="flex-row justify-center w-screen ms:w-64 ms:flex-wrap my-[9px] mm:w-[300px] mm:my-3 mm:flex-wrap ml:w-[320px] ml:my-3 ml:flex-wrap tablet:w-screen">
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>

            </View>

            <Pressable
                className='self-center '
                >
                    <Text className="border text-gray-400 border-gray-400 mt-7 mb-4 py-2 px-5 hover:text-white ms:text-xs mm:mt-[26px] mm:mb-[13px] ml:text-[14px] ml:mt-[26px] ml:mb-[13px] tablet:px-5 tablet:py-[6px] ls:text-xs ll:text-xl ll:px-8 ll:py-2 ll:mt-8 ll:mb-4 ">Manage Profile</Text>
            </Pressable>

        </View>
    )
}

export default profile;