import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from '../../../../src/components/useColorScheme';
import { Feather } from '@expo/vector-icons';
import Colors from '../../../../constants/Colors';
import TabTwoScreen from './search';
import Downloads from './downloads';
import Menu from './menu';
import index from './index';
import { StatusBar } from 'expo-status-bar';
import TVShowDetails from '../../../../src/screen/TVShowScreen';
import { useState } from 'react';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabBarIcon(props) {
  return <FontAwesome size={28} style={{ marginBottom: -3}} {...props} />;
}


function IndexStack() {
  const [headerColor, setHeaderColor] = useState("black");
 
  return (
    <Stack.Navigator
    screenOptions={{
      headerTintColor: 'white',
    }}
  >
    <Stack.Screen 
      name="index" 
      component={index}
      options={{ headerShown: false }} />
    <Stack.Screen
      name="TVShowDetails" 
      component={TVShowDetails} 
      options={{
        headerTintColor: 'white',
          headerTitleStyle: { color: 'white' },
          headerStyle: {
            backgroundColor: headerColor,
          },
          headerTitleAlign: 'center',

          headerShown: true,
          headerStatusBarHeight: 0,
      }}
    />
  </Stack.Navigator>
);
}

function SearchStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        height: 50,
        backgroundColor: "black",
      },
      headerShown: false,
      
    }}
  >
      <Stack.Screen name="search" component={TabTwoScreen} />
    </Stack.Navigator>
  );
}

function DownloadsStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        height: 50,
        backgroundColor: "black",
      },
      headerShown: false,
    }}>
      <Stack.Screen name="downloads" component={Downloads} />
    </Stack.Navigator>
  );
}

function MenuStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        height: 50,
        backgroundColor: "black",
      },
      headerShown: false,
    }}>
      <Stack.Screen name="menu" component={Menu} />
    </Stack.Navigator>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar style="dark" backgroundColor="" />
      <Tabs.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
          headerShown: false,
          tabBarStyle: { backgroundColor: "black" }, // Set background color to black
        }}>
        <Tabs.Screen
          name="Home"
          component={IndexStack}
          options={{
            tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
            
          }}
        />
        <Tabs.Screen
          name="Search"
          component={SearchStack}
          options={{
            tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="Downloads"
          component={DownloadsStack}
          options={{
            tabBarIcon: ({ color }) => <Feather name="download" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="Menu"
          component={MenuStack}
          options={{
            tabBarIcon: ({ color }) => <Feather name="menu" size={24} color={color} />,
          }}
        />
      </Tabs.Navigator>
    </>
  );
}
