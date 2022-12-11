import { StyleSheet } from "react-native";
import { colors } from "../../modals/colors";
const styles = StyleSheet.create({
  inputTextStyle: {
    backgroundColor: colors.white,
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  catStyle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 5,
  },
});

export default styles;
