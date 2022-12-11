import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import PostDetails from "../screens/postDetails";
import BottomTabNav from "./bottonTabNavigator";
import SelectPhotosScreen from "../screens/selectPhotos";
import SelectCategoryScreen from "../screens/selectCategory";
import SelectLocationScreen from "../screens/selectLocation";
const Route = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: "#798f38",
          },
        }}>
        <Stack.Screen
          name="Home"
          component={BottomTabNav}
          // component={SelectCategoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PostDetails"
          component={PostDetails}
          //options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SelectPhotos"
          component={SelectPhotosScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="selectCategory"
          component={SelectCategoryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="selectLocation"
          component={SelectLocationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
