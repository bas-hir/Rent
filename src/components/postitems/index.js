import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  Pressable,
} from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

//const imageUrl = <Image source={require("./test1.png")} />;

const Postitems = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate("PostDetails");
      }}
      style={styles.container}>
      <View style={styles.postWrap}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.postImage}></Image>
        <View style={styles.postContentWrap}>
          <View>
            <Text>VERIFY HOME DOCUMENT</Text>
            <Text style={styles.postTitle}>modern apartment</Text>
            <Text style={styles.postPlace}>Maiduguri. </Text>
          </View>
          <Text style={styles.postValue}>Apartment Credentials</Text>
        </View>
      </View>
      <View style={styles.postWrap}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.postImage}></Image>
        <View style={styles.postContentWrap}>
          <View>
            <Text>VERIFY HOME DOCUMENT</Text>
            <Text style={styles.postTitle}>modern apartment</Text>
            <Text style={styles.postPlace}>Maiduguri. </Text>
          </View>
          <Text style={styles.postValue}>Apartment Credentials</Text>
        </View>
      </View>
      <View style={styles.postWrap}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.postImage}></Image>
        <View style={styles.postContentWrap}>
          <View>
            <Text>VERIFY HOME DOCUMENT</Text>
            <Text style={styles.postTitle}>modern apartment</Text>
            <Text style={styles.postPlace}>Maiduguri. </Text>
          </View>
          <Text style={styles.postValue}>Apartment Credentials</Text>
        </View>
      </View>
      <View style={styles.postWrap}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.postImage}></Image>
        <View style={styles.postContentWrap}>
          <View>
            <Text>VERIFY HOME DOCUMENT</Text>
            <Text style={styles.postTitle}>modern apartment</Text>
            <Text style={styles.postPlace}>Maiduguri. </Text>
          </View>
          <Text style={styles.postValue}>Apartment Credentials</Text>
        </View>
      </View>
      <View style={styles.postWrap}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.postImage}></Image>
        <View style={styles.postContentWrap}>
          <View>
            <Text>VERIFY HOME DOCUMENT</Text>
            <Text style={styles.postTitle}>modern apartment</Text>
            <Text style={styles.postPlace}>Maiduguri. </Text>
          </View>
          <Text style={styles.postValue}>Apartment Credentials</Text>
        </View>
      </View>
    </Pressable>
  );
};
export default Postitems;
