import { Link } from "expo-router";
import { View, Text, Pressable, Image } from "react-native";
import { Path, Svg } from "react-native-svg";
import Card from "./Card";
import ProfileCard from "./ProfileCard";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import profile from "../../app/profile";
import { TouchableOpacity } from "react-native-gesture-handler";

const Navbar = () => {
  return (
    <View className=" h-14 w-full flex-row items-center px-16 z-20 bg-[#000000bd] ms:px-5 mm:px-5 ml:px-5 xl:h-32">
      <Text className="font-bold text-red-500 ms:text-2xl mm:text-2xl ml:text-2xl tablet:text-2xl ls:text-3xl ll:text-3xl xl:text-7xl">
        Jetflix
      </Text>

      <View className="flex-row px-3 gap-x-8 ">
        <TouchableOpacity className="border-2 border-white bg-transparent p-1 flex-row items-center  ls:hidden ll:hidden xl:hidden">
          <Text className="text-white px-1">Browse</Text>
          <AntDesign name="caretdown" size={12} color="white" />
        </TouchableOpacity>

        <View className="flex-row px-1 gap-x-8 ms:hidden mm:hidden ml:hidden tablet:hidden">
          <Link
            href={{
              pathname: "/browse",
            }}
            className="text-white xl:text-4xl"
          >
            Home
          </Link>
          <Link
            href={{
              pathname: "/browse/tv_shows",
            }}
            className="text-white xl:text-4xl "
          >
            TV Shows
          </Link>
          <Link
            href={{
              pathname: "/browse/movies",
            }}
            className="text-white xl:text-4xl"
          >
            Movies
          </Link>
          <Link
            href={{
              pathname: "/browse/news_and_popular",
            }}
            className="text-white xl:text-4xl"
          >
            New & Popular
          </Link>
          <Link
            href={{
              pathname: "/browse/my_list",
            }}
            className="text-white xl:text-4xl"
          >
            My List
          </Link>
          {/* <Link href={{
          pathname: "/browse/browse_by_languages"
        }} className="text-white">
          Browse by Languages
        </Link> */}
        </View>
      </View>

      <View className="w-[120px] h-[30px] flex items-center flex-row gap-x-1 absolute right-14 ms:-right-8 mm:-right-8 ml:-right-8 " >
        {/* Search Icon*/}
        <Pressable className="w-auto h-auto ms:hidden mm:hidden ml:hidden  xl:w-14 xl:h-14">
          <Svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="w-6 h-6  xl:w-32 xl:h-32"
          >
            <Path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </Svg>
        </Pressable>
        {/* Notification Icon */}
        <Pressable className=" w-auto h-auto xl:w-14 xl:h-14">
          <Svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="w-6 h-6 xl:w-32 xl:h-32 "
          >
            <Path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </Svg>
        </Pressable>
        <Pressable className=" w-auto h-auto flex-row items-center xl:hidden">
          <MaterialCommunityIcons name="account-box" size={24} color="white" />
          <AntDesign name="caretdown" size={14} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default Navbar;
