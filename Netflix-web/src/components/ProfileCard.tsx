import { router } from "expo-router";
import { TouchableOpacity, View, Text, Image, FlatList } from "react-native";
import profiles from "../../assets/data/profiles";



type ProfileProps = {
  profile:{
    name: string;
    avatar: string;
  };
}

const ProfileCard = (props : ProfileProps) => {
  const { profile } = props;
  return (
    <TouchableOpacity
      onPress={() => {
        router.navigate({
          pathname: "/home/[id]",
          params: { id: "" },
        });
      }}
      className="mx-1 tablet:mx-2 ls:mx-2"
    >
      <View>
        <View className="w-40 h-40 bg-white rounded-md ms:w-20 ms:h-20 mm:w-20 mm:h-20 ml:w-[84px] ml:h-[84px] tablet:w-[84px] tablet:h-[84px] ls:w-[102px] ls:h-[102px] ll:w-[144px] ll:h-[144px]">
          <Image source={{uri: profile.avatar}} className="w-40 h-40 self-center"></Image>
        </View>
        <Text className="text-center text-white my-2 ms:text-xs mm:text-xs tablet:text-xs ll:text-lg">{profile.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileCard;
