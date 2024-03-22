import { router } from "expo-router"; // Fix import statement
import { TouchableOpacity, View, Text, Image } from "react-native";
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

  return (
    <View className="flex">
      <TouchableOpacity
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
            paddingBottom: 50,
            fontSize: Platform.OS === "web" ? 24 : 14,
          }}
          >
          {profile.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileCard;
