import { Link } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { Path, Svg } from "react-native-svg";
import Card from "./Card";
import ProfileCard from "./ProfileCard";

const Navbar = () => {
  return (
    <View className="h-[68px] w-full flex flex-row px-[60px] items-center relative">
      <Text className="text-3xl font-bold text-red-500">Jetflix</Text>

      <View className="flex-row px-9">
        <Link href={""} className="text-white pr-5">
          Home
        </Link>
        <Link href={""} className="text-white pr-5">
          TV Shows
        </Link>
        <Link href={""} className="text-white pr-5">
          Movies
        </Link>
        <Link href={""} className="text-white pr-5">
          News & Popular
        </Link>
        <Link href={""} className="text-white pr-5">
          My List
        </Link>
        <Link href={""} className="text-white">
          Browse by Languages
        </Link>
      </View>

      <View className="w-[120px] h-[30px] absolute right-0 mx-[60px] flex-row ">
        <Pressable className="w-[30px] h-[30px] pr-[10px]">
          <Svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="w-6 h-6"
          >
            <Path
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </Svg>
        </Pressable>
        <Pressable className=" w-[30px] h-[30px] pr-[10px]">
          <Svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            className="w-6 h-6 "
          >
            <Path
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </Svg>
        </Pressable>
      </View>
    </View>
  );
};

export default Navbar;
