import { StatusBar } from "expo-status-bar";
import { colors } from "../../modals/colors";
import { StyleSheet, SafeAreaView, Platform, View, Text } from "react-native";
import Postitems from "../../components/postitems";
import HeaderForMobile from "../../components/headerForMobile";

const PostDetails = () => {
  return (
    <View>
      <Text
        style={{
          marginTop: 100,
          paddingBottom: 10,
          fontSize: 15,
          textAlign: "center",
          backgroundColor: "white",
          marginLeft: 10,
          marginRight: 10,
        }}>
        WELCOME TO KTECH SPACE NIGERIA LIMITED
      </Text>
      <Text
        style={{
          marginTop: 50,
          paddingBottom: 10,
          fontSize: 15,
          alignContent: "center",
          textAlign: "justify",
          marginLeft: 10,
          marginRight: 10,
          backgroundColor: "white",
        }}>
        Verifylada As a new product of KTECH SPACE NIGERIA LIMITED is designed
        in-line with the specifics of national niometric standards requirement,
        standardization of dada collection, transmission and storage processes
        to cover the basic function of enrollment, verification and
        identification
      </Text>
      <Text
        style={{
          marginTop: 100,
          paddingBottom: 10,
          fontSize: 15,
          textAlign: "center",
          backgroundColor: "white",
          marginLeft: 10,
          marginRight: 10,
        }}>
        SERVICES RENDER, COMING SOON
      </Text>
    </View>
  );
};

export default PostDetails;
