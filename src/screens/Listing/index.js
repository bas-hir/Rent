import {
  StyleSheet,
  SafeAreaView,
  Platform,
  View,
  Text,
  Pressable,
  TextInput,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { withAuthenticator } from "aws-amplify-react-native";
import {
  Auth,
  Storage,
  API,
  graphqlOperation,
  AuthModeStrategyType,
} from "aws-amplify";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../modals/colors";
//import { TextInput } from "react-native-gesture-handler";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
//import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { createListing } from "../../graphql/mutations";
const Listing = () => {
  const navigation = useNavigation();
  const [Category, setCategory] = useState({ catID: 0, catName: "category" });
  const [Location, setLocation] = useState({
    locID: 0,
    locName: "location",
  });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rentValue, setRentValue] = useState("");
  const [userID, setUserID] = useState("");
  const [postSuccess, setPostSuccess] = useState("");
  const [postProcessing, setPostProcessing] = useState(false);

  useEffect(() => {
    if (postSuccess !== "") {
      setPostProcessing(false);
      Alert.alert("Success", postSuccess, [
        {
          text: "ok",
          onPress: () => navigation.navigate("Home", { screen: "Explore" }),
        },
      ]);
    }
  }, [postSuccess]);
  Auth.currentAuthenticatedUser()
    .then((user) => {
      console.log("user id is:", user.attributes.sub);
      setUserID(user.attributes.sub);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
  const [imageData, setImageData] = useState([]);
  const route = useRoute();
  useEffect(() => {
    if (!route.params) {
      console.log("there is no data in route");
    } else {
      if (route.params.imageData !== undefined) {
        setImageData(route.params.imageData);
        // console.log(route.params.imageData);
      } else if (route.params.catID !== undefined) {
        setCategory(route.params);
      } else if (route.params.locID !== undefined) {
        setLocation(route.params);
      }
    }
  });

  const imageAllUrl = [];
  const storeTopDB = async () => {
    setPostProcessing(true);
    imageData &&
      imageData.map(async (component, index) => {
        const imageurl = component.uri;
        const response = await fetch(imageurl);
        const blob = await response.blob();
        const uriParts = imageurl.split(".");
        const extension = uriParts[uriParts.length - 1];
        const key = `${uuidv4()}.${extension}`;
        imageAllUrl.push({ imageurl: key });
        await Storage.put(key, blob);

        if (imageData.length == index + 1) {
          /* numbers of selected image  */
          const postData = {
            title: title,
            categoryName: Category.catName,
            categoryID: Category.catID,
            description: description,
            images: JSON.stringify(imageAllUrl),
            locationID: Location.locID,
            locationName: Location.locName,
            userID: userID,
            rentValue: rentValue,
            commonID: "1",
          };

          await API.graphql(
            {
              query: createListing,
              variables: { input: postData },
              authMode: "AMAZON_COGNITO_USER_POOLS",
            }
            //graphqlOperation(createListing, { input: postData })
          );
          setPostProcessing(false);
          setPostSuccess("Your product information is successfuly added");
        }

        //console.log(key);
        //console.log(extension);
        //console.log(uriParts);
        //console.log("response is: ", JSON.stringify(imageurl));
      });
  };
  return (
    <ScrollView style={{ margin: 3 }}>
      <View>
        <Text style={{ margin: 5, fontSize: 16 }}>Uplaod Image</Text>
        <Pressable
          style={{
            backgroundColor: colors.white,
            display: "flex",
            JustifyContent: "center",
            alignItems: "center",
            margin: 5,
            height: 150,
            width: 150,
            borderWidth: 3,
            borderStyle: "dashed",
            borderRadius: 35,
            backgroundColor: "#f0f5ce",
          }}
          onPress={() => {
            navigation.navigate("SelectPhotos");
          }}>
          <AntDesign
            name="plus"
            size={24}
            color="black"
            alignItems="center"
            JustifyContent="center"
            marginTop={10}
          />
        </Pressable>
        <View>
          <ScrollView horizontal={true}>
            {imageData &&
              imageData.map((component, index) => (
                <Image
                  key={component.id}
                  source={{ uri: component.uri }}
                  style={{
                    height: 50,
                    width: 50,
                    marginBottom: 20,
                    marginTop: -5,
                    marginRight: 5,
                  }}
                />
              ))}
          </ScrollView>
        </View>
      </View>

      <Pressable
        style={styles.catStyle}
        onPress={() => {
          navigation.navigate("selectCategory");
        }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialIcons
            name="settings-input-composite"
            size={24}
            color="black"
          />
          <Text
            style={{ fontSize: 16, color: colors.secondary, marginLeft: 5 }}>
            {Category.catName}
          </Text>
        </View>
        <AntDesign name="caretright" size={24} color={colors.secondary} />
      </Pressable>
      <Pressable
        style={styles.catStyle}
        onPress={() => {
          navigation.navigate("selectLocation");
        }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons name="map-marker" size={24} color="black" />
          <Text
            style={{ fontSize: 16, color: colors.secondary, marginLeft: 5 }}>
            {Location.locName}
          </Text>
        </View>
        <AntDesign name="caretright" size={24} color={colors.secondary} />
      </Pressable>
      <View style={styles.inputTextStyle}>
        <MaterialIcons
          name="subtitles-off"
          size={24}
          color={colors.secondary}
        />
        <TextInput
          placeholder="Product Title"
          style={{ margin: 5, width: "100%" }}
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <View style={styles.inputTextStyle}>
        <MaterialIcons name="description" size={24} color={colors.secondary} />
        <TextInput
          placeholder="Description"
          style={{ margin: 5, width: "100%" }}
          onChangeText={(text) => setDescription(text)}
          multiline={true}
          numberOfLines={3}
        />
      </View>
      <View style={[styles.inputTextStyle, { width: "45%" }]}>
        <FontAwesome name="money" size={24} color={colors.secondary} />
        <TextInput
          placeholder="Add Value"
          style={{ marginLeft: 5, width: "100%" }}
          onChangeText={(text) => setRentValue(text)}
          keyboardType="numeric"
        />
      </View>
      <Pressable
        onPress={() => storeTopDB()}
        android_ripple={{ color: "grey" }}
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
          {postProcessing ? "Processing your Information" : "VERIFY PRODUCT"}
          {/* short form of else if condition */}
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default withAuthenticator(Listing);
