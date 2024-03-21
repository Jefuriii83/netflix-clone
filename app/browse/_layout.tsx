import { Slot } from "expo-router";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeLayout() {
  return (
    <>
      <ScrollView className="bg-black">
        <Navbar />
        <Slot />
      </ScrollView>
    </>
  );
}
