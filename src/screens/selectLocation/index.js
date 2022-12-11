import React, { useMemo, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Alert,
  Pressable,
} from "react-native";
import { Ionicons, Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { MediaType } from "expo-media-library";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import { colors } from "../../modals/colors";

const SelectLocationScreen = () => {
  const navigation = useNavigation();
  const [locState, setLocState] = useState({
    names: [
      {
        id: 0,
        name: "Abia State",
      },
      {
        id: 1,
        name: "Adamawa State",
      },
      {
        id: 2,
        name: "Akwa Ibom State",
      },
      {
        id: 3,
        name: "Anambra State ",
      },
      {
        id: 4,
        name: "Bauchi State",
      },
      {
        id: 5,
        name: "Bayelsa State ",
      },
      {
        id: 6,
        name: "Benue State (Makurdi) ",
      },
      {
        id: 7,
        name: "Borno State (Maiduguri)",
      },
      {
        id: 8,
        name: "Cross River State (Calabar) ",
      },
      {
        id: 9,
        name: "Delta State (Asaba) ",
      },
      {
        id: 10,
        name: "Ebonyi State (Abakaliki)",
      },
      {
        id: 11,
        name: "Edo State (Benin City)",
      },
      {
        id: 12,
        name: "Ekiti State (Ado Ekiti)",
      },
      {
        id: 13,
        name: "Gombe State (Gombe)",
      },
      {
        id: 14,
        name: "Imo State (Owerri)",
      },
      {
        id: 15,
        name: "Jigawa State (Dutse)",
      },
      {
        id: 16,
        name: "Kaduna State (Kaduna)",
      },
      {
        id: 17,
        name: "Kano State (Kano)",
      },
      {
        id: 18,
        name: "Katsina State (Katsina)",
      },
      {
        id: 19,
        name: "Kebbi State (Birnin Kebbi)",
      },
      {
        id: 20,
        name: "Kogi State (Lokoja)",
      },
      {
        id: 21,
        name: "Kwara State (Ilorin)",
      },
      {
        id: 22,
        name: "Lagos State (Ikeja)",
      },
      {
        id: 23,
        name: "Nasarawa State (Lafia)",
      },
      {
        id: 24,
        name: "Niger State (Minna)",
      },
      {
        id: 25,
        name: "Ogun State (Abeokuta)",
      },
      {
        id: 26,
        name: "Ondo State (Akure)",
      },
      {
        id: 27,
        name: "Osun State (Oshogbo)",
      },
      {
        id: 28,
        name: "Oyo State (Ibadan)",
      },
      {
        id: 29,
        name: "Plateau State (Jos)",
      },
      {
        id: 30,
        name: "Rivers State (Port Harcourt)",
      },
      {
        id: 31,
        name: "Sokoto State (Sokoto)",
      },
      {
        id: 32,
        name: "Taraba State (Jalingo)",
      },
      {
        id: 33,
        name: "Yobe State (Damaturu)",
      },
      {
        id: 34,
        name: "Zamfara State (Gusau)",
      },
    ],
  });

  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 20,
          margin: 20,
          padding: 10,
          borderBottomWidth: 15,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomColor: colors.black,
          textAlign: "center",
          paddingLeft: 10,
        }}>
        Choose Location
      </Text>
      {locState.names.map((item, index) => (
        <Pressable
          key={item.id}
          android_ripple={{ color: colors.black }}
          style={{
            padding: 15,
            backgroundColor: colors.primary,
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "row",
            paddingLeft: 10,
            borderBottomWidth: 5,
            borderBottomColor: "#668c70",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            //borderBottomTopRadius: 30,
            borderRightColor: colors.black,
            //borderBottomStartRadius: 20,
            // borderBottomEndRadius: 20,
            //paddingBottom: 60,
          }}
          onPress={() => {
            navigation.navigate("Listing", {
              locID: item.id,
              locName: item.name,
            });
          }}>
          <Text>{item.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default SelectLocationScreen;
