import {
  StyleSheet,
  SafeAreaView,
  Platform,
  View,
  Text,
  Pressable,
} from "react-native";
import { withAuthenticator } from "aws-amplify-react-native";
import { Auth } from "aws-amplify";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../modals/colors";
import { TextInput } from "react-native-gesture-handler";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
//import { MaterialIcons } from "@expo/vector-icons";

const Listing = () => {
  Auth.currentAuthenticatedUser()
    .then((user) => {
      console.log("email is:", user.attribute.email);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });

  return (
    <View style={{ margin: 5 }}>
      <View>
        <Text style={{ margin: 10 }}>Uplaod Image</Text>
        <Pressable
          style={{
            backgroundColor: colors.white,
            display: "flex",
            JustifyContent: "center",
            alignItems: "center",
            margin: 19,
            height: 120,
            width: 150,
            borderWidth: 1,
            borderStyle: "dashed",
            borderRadius: 28,
          }}>
          <AntDesign name="plus" size={24} color="black" />
        </Pressable>
      </View>

      <View style={styles.catStyle}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons
            name="settings-input-composite"
            size={24}
            color="black"
          />
          <Text
            style={{ fontSize: 16, color: colors.secondary, marginLeft: 5 }}>
            Category
          </Text>
        </View>
        <AntDesign name="caretright" size={24} color={colors.secondary} />
      </View>
      <View style={styles.catStyle}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons name="map-marker" size={24} color="black" />
          <Text
            style={{ fontSize: 16, color: colors.secondary, marginLeft: 5 }}>
            location
          </Text>
        </View>
        <AntDesign name="caretright" size={24} color={colors.secondary} />
      </View>
      <View style={styles.inputTextStyle}>
        <MaterialIcons
          name="subtitles-off"
          size={24}
          color={colors.secondary}
        />
        <TextInput placeholder="Product Title" style={{ margin: 5 }} />
      </View>
      <View style={styles.inputTextStyle}>
        <MaterialIcons name="description" size={24} color={colors.secondary} />
        <TextInput placeholder="Description" style={{ margin: 5 }} />
      </View>
      <View style={[styles.inputTextStyle, { width: "45%" }]}>
        <FontAwesome name="money" size={24} color={colors.secondary} />
        <TextInput placeholder="Add Value" style={{ marginLeft: 5 }} />
      </View>
      <View
        style={{
          margin: 10,
          borderRadius: 30,
          backgroundColor: colors.secondary,
          alignItems: "center",
          paddingLeft: 20,
          // marginTop: 150,
          elevation: 5,
        }}>
        <Text
          style={{
            color: colors.white,
            paddingVertical: 12,
            fontSize: 14.5,
            fontWeight: "bold",
          }}>
          Post Product
        </Text>
      </View>
    </View>
  );
};

export default withAuthenticator(Listing);
