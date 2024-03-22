import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  FlatList,
} from "react-native";
// import { NativeWindStyleSheet } from "nativewind";
import ProfileCard from "../../src/components/ProfileCard";
import profiles from "../../assets/data/profiles";
import { Platform} from 'react-native';
import { MonoText } from "../../src/components/StyledText";

const profile = () => {
  const { id } = useLocalSearchParams();

  return (
    <View className=" bg-black flex h-screen w-screen items-center justify-center">
      <Text className="text-white text-center py-5 text-6xl ms:text-3xl mm:text-3xl ml:text-3xl ls:text-6xl ll:text-6xl">
        Who's watching?
      </Text>
      {/* AvatarCard */}
      <View className="flex-row flex-wrap px-5 ms:w-64 my-[9px] mm:w-[300px] mm:my-3 mm:px-10 ml:px-10 mm:flex-wrap ml:w-[320px] ml:my-3 ">
        {profiles.profile.map((item) => (
          <ProfileCard profile={item} key={item.name}/>
        ))}
      </View>

      <Pressable className="self-center ">
        <Text className="border text-gray-400 border-gray-400 mt-7 mb-4 py-2 px-5 hover:text-white ms:text-xs mm:mt-[26px] mm:mb-[13px] ml:text-[14px] ml:mt-[26px] ml:mb-[13px] tablet:px-5 tablet:py-[6px] ls:text-xs ll:text-xl ll:px-8 ll:py-2 ll:mt-8 ll:mb-4 xl:text-4xl xl:py-5 xl:px-9 xl: xl:mt-28">
          Manage Profile
        </Text>
      </Pressable>
    </View>
  );
};

export default profile;
