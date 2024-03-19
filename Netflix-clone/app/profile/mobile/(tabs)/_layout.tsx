import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from '../../../../src/components/useColorScheme';
import { Feather } from '@expo/vector-icons';
import Colors from '../../../../constants/Colors';
import TabTwoScreen from './search';
import Downloads from './downloads';
import Menu from './menu';
import index from './index';

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
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        headerShown: false,
        tabBarStyle: { backgroundColor: 'black' }, // Set background color to black
      }}>
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
