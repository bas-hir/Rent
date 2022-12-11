import { Text, View, TextInput } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../modals/colors";

const imageUrl =
  "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600";

const HeaderForMobile = () => {
  return (
    <>
      <View style={styles.headerWrap}>
        <View style={styles.searchByTextWrap}>
          <Feather name="search" size={24} color="black" />
          <TextInput
            placeholder="search in Donb.com"
            style={styles.searchPlaceholder}
            multiline={false}
          />
        </View>
        <View style={styles.locationCatSearchWrap}>
          <View style={styles.locationSearchWrap}>
            <MaterialIcons name="location-city" size={24} color="black" />
            <Text>Location:</Text>
            <Text style={styles.locationSearchText}>ABUJA</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons name="category" size={24} color="black" />
            <Text style={styles.catText}>Category:</Text>
            <Text style={styles.catDynText}>Vehicle</Text>
          </View>
        </View>
      </View>
    </>
  );
};
export default HeaderForMobile;
