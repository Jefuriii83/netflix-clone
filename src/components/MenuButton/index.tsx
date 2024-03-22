import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from "../Themed";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

interface NameProps {
  name1: string;
  name2: string;
  name3: string;
  destination: string;
}

const MenuButton = ({ name1, name2, name3, destination }: NameProps) => {
  const handlePress = () => {
    router.navigate({ pathname: destination });
  };

  return (
    <View className="bg-black tablet:items-center">
  <TouchableOpacity onPress={handlePress}>
    <View className="flex-row items-center justify-between bg-gray-900 mb-1 py-2 p-2 tablet:w-[500px]">
      <View className="flex-row items-center bg-gray-900">
        <Feather name={name1} size={24} color="white" />
        <Text className="text-lg ml-4 text-white tablet:text-xl">{name2}</Text>
      </View>
      <AntDesign name={name3} size={24} color="white" />
    </View>
  </TouchableOpacity>
</View>

  );
};

export default MenuButton;
