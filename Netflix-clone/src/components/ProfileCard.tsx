import { router } from "expo-router"; // Fix import statement
import { TouchableOpacity, View, Text, Image } from "react-native";
import profiles from "../../assets/data/profiles";
import { Platform } from 'react-native';

type ProfileProps = {
  profile:{
    name: string;
    avatar: string;
  };
}

const ProfileCard = (props: ProfileProps) => {
  const { profile } = props;

  // Conditionally render based on platform
  const profileAction = Platform.OS === 'web' ? () => {
    router.navigate({
      pathname: "/home/[id]",
      params: { id: "" },
    });
  } : () => {
    router.navigate({
      pathname: "./profile/mobile/(tabs)",
      params: { id: "" },
    });
  };

  return (
    <TouchableOpacity
      onPress={profileAction}
      style={{ marginHorizontal: Platform.OS === 'web' ? 4 : 8 }}
    >
      <View>
        <View style={{ width: 84, height: 84, backgroundColor: 'white', borderRadius: 10 }}>
          <Image source={{ uri: profile.avatar }} style={{ width: 84, height: 84, alignSelf: 'center' }} />
        </View>
        <Text style={{ textAlign: 'center', color: 'white', marginTop: 2, fontSize: Platform.OS === 'web' ? 12 : 14 }}>
          {profile.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileCard;
