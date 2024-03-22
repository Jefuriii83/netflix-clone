import { View, Text, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";

type SubheaderProps = {
  genreTitle: string;
};

const Subheader = (title: SubheaderProps) => {
  return (
    <View className="w-auto h-16 flex-row items-center px-16 border-2 justify-between bg-[#000000cc] ms:px-3 mm:px-4 ml:px-4" >
      <View className="flex-row items-center ">
        <Text className="text-white font-bold text-2xl ms:text-xl mm:text-xl">
          {title.genreTitle}
        </Text>
        <TouchableOpacity
          className="border-2 border-white w-28 bg-transparent p-1 mx-5 flex-row justify-around items-center ms:w-20 mm:mx-2"
          onPress={() => {}}
        >
          <Text className="text-white ms:text-xs">Genres</Text>
          <AntDesign name="caretdown" size={16} color="white" />
        </TouchableOpacity>
      </View>
      <View className="flex-row  px-2 ms:p-0">
        <TouchableOpacity className="border-2 px-2 py-1  border-white">
          <FontAwesome5 name="align-left" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="border-2 px-2 py-1 border-[#c4c4c4]">
          <Ionicons name="grid" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Subheader;
