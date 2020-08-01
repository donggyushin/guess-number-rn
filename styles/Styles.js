import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";
export default StyleSheet.create({
  card: {
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: Colors.mainColor,
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
});
