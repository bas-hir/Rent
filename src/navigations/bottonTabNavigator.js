import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import PostDetails from "../screens/postDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../modals/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Listing from "../screens/Listing";
//import { Entypo } from "@expo/vector-icons";
const BottomTabNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.secondary,
        tabBarStyle: {
          backgroundColor: colors.primary,
          height: 50,
        },
      }}
      sceneContainerStyle={{ backgroundColor: colors.background }}>
      <Tab.Screen
        name={"Explore"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={25} color={color.secondary} />
          ),
          //headerShown: false,
        }}
      />
      <Tab.Screen
        name={"Listing"}
        component={Listing}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-text"
              size={24}
              color="black"
            />
          ),
          headerShown: false, //// it use to hide the top title
        }}
      />
      <Tab.Screen
        name={"ABOUT"}
        component={PostDetails}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="journal-whills" size={24} color="red" />
          ),

          //headerShown: false,
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
