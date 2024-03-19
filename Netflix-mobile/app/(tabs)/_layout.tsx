import React from 'react';
import { View, Text } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link} from 'expo-router';
import { Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TVShowDetails from '@/screen/TVShowScreen';
import TabTwoScreen from './search';
import Downloads from './downloads';
import Menu from './menu';
import index from './index';
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

const Tabs = createBottomTabNavigator();
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="TVShowDetails"
        component={TVShowDetails}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
          headerShown: true,
          
        }}
      />
      <Tabs.Screen
        name="index"
        component={index}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
          
        }}
      />
      <Tabs.Screen
        name="search"
        component={TabTwoScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />,

        }}
      />
      <Tabs.Screen
        name="downloads"
        component={Downloads}
        options={{
          title: 'Downloads',
          tabBarIcon: ({ color }) => <Feather name="download" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="menu"
        component={Menu}
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => <Feather name="menu" size={24} color={color} />,
        }}
      />
     
    </Tabs.Navigator>
  );
}