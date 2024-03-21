import { Pressable, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View className="h-20 flex px-10  w-11/12 self-center bg-black">
      {/* Icons */}
      <View className="w-[213px] h-6 flex-row justify-evenly ">
        <Pressable>
          <FontAwesome name="facebook-f" size={24} color="white" />
        </Pressable>
        <Pressable>
          <FontAwesome name="instagram" size={25} color="white" />
        </Pressable>
        <Pressable>
        <FontAwesome name="twitter" size={24} color="white" />
        </Pressable>
        <Pressable>
          <FontAwesome name="youtube-play" size={25} color="white" />
        </Pressable>
      </View>

      <Text className="text-[#808080] px-6 pt-6">© 2024 Jetflix, Inc</Text>
    </View>
  );
};

export default Footer;
