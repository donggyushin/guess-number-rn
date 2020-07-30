import React, { useState } from "react";
import {
  StyleSheet,
  Alert,
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

const StartGameScreen = () => {
  const [number, setNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  const resetNumber = () => {
    setNumber("");
    setConfirmed(false);
  };

  const updateNumnber = (text) => {
    if (parseInt(text) < 1000) {
      setNumber(text);
    }
  };

  const confirmNumber = () => {
    if (isNaN(number) || number <= 0 || number > 99) {
      // Alert
      Alert.alert(
        "Invalid Number",
        "The Number should be a number between 1 to 99",
        [{ text: "OK", onPress: resetNumber }],
        { cancelable: false }
      );
      return;
    }
    setSelectedNumber(number);
    setNumber("");
    setConfirmed(true);
  };

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
      <View style={styles.screen}>
        <Text style={styles.text}>Start Game!</Text>
        <View style={styles.card}>
          <TextInput
            value={number}
            keyboardType="number-pad"
            onChangeText={updateNumnber}
            style={styles.textInput}
          />
          <View style={styles.buttonContainer}>
            <Button onPress={resetNumber} color="white" title="reset" />
            <Button onPress={confirmNumber} color="white" title="confirm" />
          </View>
        </View>
        <View style={styles.chooseNumberContainer}>
          <Text style={styles.choosenNumberText}>
            {confirmed && `Your number is ${selectedNumber}`}
          </Text>
        </View>
        {confirmed && (
          <View style={styles.gameStartButton}>
            <Button color="white" title="GAME START" />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#1f4068",
    alignItems: "center",
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    marginVertical: 10,
    marginBottom: 60,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textInput: {
    width: 200,
    height: 40,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    color: "white",
    textAlign: "center",
  },
  card: {
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "#1f4068",
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
  chooseNumberContainer: {
    paddingTop: 20,
  },
  gameStartButton: {
    width: 250,
    paddingVertical: 10,
    backgroundColor: "#0b2545",
    borderRadius: 8,
    marginTop: 20,
  },
  choosenNumberText: {
    color: "white",
    fontSize: 20,
    marginVertical: 10,
  },
});

export default StartGameScreen;
