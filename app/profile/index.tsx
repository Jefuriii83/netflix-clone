import { useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity, Pressable, FlatList } from "react-native";
// import { NativeWindStyleSheet } from "nativewind";
import ProfileCard from "../../src/components/ProfileCard";
import profiles from "../../assets/data/profiles";
import { Platform} from 'react-native';
import { MonoText } from "../../src/components/StyledText";



const profile = () => {
    const { id } = useLocalSearchParams();
    const isWeb = Platform.OS === "web";

    return isWeb ? (
        <View className=" bg-black flex h-full w-full items-center justify-center ">
          <Text className="text-white text-center py-6 text-6xl ms:text-3xl mm:text-4xl ml:text-4xl tablet:text-5xl ls:text-6xl ll:text-6xl xl:text-8xl xl:py-10">
            Who's watching?
          </Text>
          {/* AvatarCard */}
          <View className="flex-row flex-wrap ms:w-52 ml:w-60">
            {profiles.profile.map((item) => (
              <ProfileCard profile={item} key={item.name}/>
            ))}
            
          </View>
    
          <Pressable className="self-center pt-5">
            <Text className="border text-gray-400 border-gray-400 py-2 px-5 hover:text-white ms:text-xs mm:mt-[26px] mm:mb-[13px] ml:text-[14px] ml:mt-[26px] ml:mb-[13px] tablet:px-5 tablet:py-[6px] ls:text-xs ll:text-xl ll:px-8 ll:py-2 ll:mt-8 ll:mb-4 xl:text-4xl xl:py-5 xl:px-9 xl: xl:mt-28">
              Manage Profile
            </Text>
          </Pressable>
        </View>
      ) : (
  
        <View className=" bg-black flex h-full w-full items-center justify-center ">
            <Text className="text-white text-center text-6xl my-7 ms:text-3xl ms:my-5 mm:text-3xl ml:text-3xl ml:my-5 tablet:text-3xl ls:text-4xl ll:text-5xl xl:text-9xl">Who's watching?</Text>
            {/* AvatarCard */}
            <View className="ms:w-64 ms:h-64 my-[9px] mm:w-[300px] mm:my-3 mm:flex-wrap ml:w-[320px] ml:my-3 ">
                <FlatList
                className="ms:w-full"
                data={profiles.profile}
                renderItem={({ item }) => <ProfileCard profile={item}></ProfileCard>}
                horizontal
                ></FlatList>

            </View>

            <Pressable
                className='self-center '
                >
                    <Text className="border text-gray-400 border-gray-400 mt-7 mb-4 py-2 px-5 hover:text-white ms:text-xs mm:mt-[26px] mm:mb-[13px] ml:text-[14px] ml:mt-[26px] ml:mb-[13px] tablet:px-5 tablet:py-[6px] ls:text-xs ll:text-xl ll:px-8 ll:py-2 ll:mt-8 ll:mb-4 xl:text-4xl xl:py-5 xl:px-9 xl: xl:mt-28">Manage Profile</Text>
            </Pressable>

        </View>
       
    )
}

export default profile;