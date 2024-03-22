import { router } from "expo-router"; // Fix import statement
import { TouchableOpacity, View, Text, Image, Pressable } from "react-native";
import profiles from "../../assets/data/profiles";
import { Platform } from "react-native";

type ProfileProps = {
  profile: {
    name: string;
    avatar: string;
  };
};

const ProfileCard = (props: ProfileProps) => {
  
  const { profile } = props;

const isWeb = Platform.OS === "web";

   //Conditionally render based on platform
   const profileAction =
      Platform.OS === "web"
        ? () => {
          router.navigate({
              pathname: "/browse"
            });
          }
        : () => {
            router.navigate({
              pathname: "./profile/mobile/(tabs)",
              params: { id: "" },
            });
          };

  return isWeb ? (
    <View className="flex">
      <Pressable
        onPress={profileAction}
        style={{ marginHorizontal: Platform.OS === "web" ? 4 : 8 }}
      >
        <View className="group flex-row w-44 mx-auto items-center justify-center border-2 border-transparent group-hover:border-white overflow-hidden ms:w-24 ms:h-24 mm:w-24 mm:h-24 ml:h-28 ml:w-28 tablet:w-[100px] tablet:h-[100px] xl:w-96 xl:h-96">
          <Image
            source={{ uri: profile.avatar }}
            className="w-44 h-44 rounded-md flex ms:w-24 ms:h-24 mm:w-24 mm:h-24 ml:h-28 ml:w-28 tablet:w-[100px] tablet:h-[100px] xl:w-96 xl:h-96"
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            paddingTop: 2,
            paddingBottom: 10,
            // fontSize: Platform.OS === "web" ? 16 : 14,
          }}
          className="xl:text-5xl"
          >
          {profile.name}
        </Text>
      </Pressable>
    </View>) : (
    <View className="flex">
      <Pressable
        onPress={profileAction}
        style={{ marginHorizontal: Platform.OS === "web" ? 4 : 8 }}
      >
        <View className="group flex-row w-44 mx-auto items-center justify-center border-2 border-transparent group-hover:border-white overflow-hidden ms:w-24 ms:h-24 mm:w-24 mm:h-24 ml:h-28 ml:w-28 tablet:w-[100px] tablet:h-[100px] xl:w-96 xl:h-96">
          <Image
            source={{ uri: profile.avatar }}
            className="w-44 h-44 rounded-md flex ms:w-24 ms:h-24 mm:w-24 mm:h-24 ml:h-28 ml:w-28 tablet:w-[100px] tablet:h-[100px] xl:w-96 xl:h-96"
          />
        </View>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            paddingTop: 2,
            paddingBottom: 10,
            // fontSize: Platform.OS === "web" ? 16 : 14,
          }}
          className="xl:text-5xl"
          >
          {profile.name}
        </Text>
      </Pressable>
    </View>
  );
};


//   return (
//     <View className="flex">
//       <Pressable
//         onPress={() => {router.navigate('/browse')}}
//       >
//         <View className="group flex-row w-44 mx-auto items-center justify-center border-2 border-transparent group-hover:border-white overflow-hidden ms:w-24 ms:h-24 mm:w-24 mm:h-24 ml:h-28 ml:w-28 tablet:w-[100px] tablet:h-[100px] xl:w-96 xl:h-96">
//           <Image
//             source={{ uri: profile.avatar }}
//             className="w-44 h-44 rounded-md flex ms:w-24 ms:h-24 mm:w-24 mm:h-24 ml:h-28 ml:w-28 tablet:w-[100px] tablet:h-[100px] xl:w-96 xl:h-96"
//           />
//         </View>
//         <Text className="text-white pt-2 text-center">
//           {profile.name}
//         </Text>
//       </Pressable>
//     </View>
//   );
// };
export default ProfileCard;
