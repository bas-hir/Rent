import { StatusBar } from "expo-status-bar";
import { colors } from "./src/modals/colors";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import Home from "./src/screens/Home";
import Route from "./src/navigations/router";
import "react-native-gesture-handler";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});
export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewForDroid}>
      <StatusBar barstyle="dark-content" backgroundColor="#798f32" />
      <Route />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewForDroid: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: colors.background,
  },
});
