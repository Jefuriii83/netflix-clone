import { Pressable, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link, router } from "expo-router";

const Footer = () => {
  return (
    <View className="h-20 flex px-10 pt-5 w-11/12 self-center bg-black ">
      {/* Icons */}
      <View className="w-[213px] h-6 flex-row justify-evenly ms:self-center mm:self-center ml:self-center tablet:self-center">
        <Link href={"https://www.facebook.com/netflixph"} target="_blank">
          <FontAwesome name="facebook-f" size={24} color="white" className=""/>
        </Link>
        <Link href={"https://www.instagram.com/netflixasia/"} target="_blank">
          <FontAwesome name="instagram" size={25} color="white" />
        </Link>
        <Link href={"https://twitter.com/NetflixAsia"} target="_blank">
          <FontAwesome name="twitter" size={24} color="white" />
        </Link>
        <Link
          href={
            "https://www.youtube.com/channel/UCZoC-XeDO7HxbAdeCaRPPCw/videos"
          }
          target="_blank"
        >
          <FontAwesome name="youtube-play" size={25} color="white" />
        </Link>
      </View>

      <Text className="text-[#808080] px-6 pt-4 ms:text-center mm:text-center ml:text-center tablet:self-center ls:text-xs ll:text-xs xl:text-3xl">© 2024 Jetflix, Inc</Text>
    </View>
  );
};

export default Footer;
