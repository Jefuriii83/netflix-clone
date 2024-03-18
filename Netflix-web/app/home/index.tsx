import { useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import ProfileCard from "../../src/components/ProfileCard";
import Navbar from "../../src/components/Navbar";


const profile = () => {
    const { id } = useLocalSearchParams();

    return(
        <ScrollView className="bg-black">
            <Navbar></Navbar>
        </ScrollView>
    )
}

export default profile;