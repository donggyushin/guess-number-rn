import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Colors from "../constants/Colors";
import { randomNumberGenerate } from "../utils/Utils";
import Styles from "../styles/Styles";

const GameScreen = ({ answer, restartGame }) => {
  const [guessNumber, setGuessNumber] = useState(0);
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    const randomNumber = randomNumberGenerate(1, 99, answer);
    setGuessNumber(randomNumber);
  }, []);

  useEffect(() => {
    if (parseInt(guessNumber) === parseInt(answer)) {
      setCorrect(true);
    }
  }, [guessNumber]);

  const upperGuessNumber = () => {
    if (guessNumber > answer) {
      Alert.alert(
        "Wrong hint!",
        "Please give right hint to the opponent",
        [{ text: "OK" }],
        { cancelable: false }
      );
      return;
    }

    const randomNumber = randomNumberGenerate(guessNumber, 99);
    setGuessNumber(randomNumber);
  };

  const lowerGuessNumber = () => {
    if (guessNumber < answer) {
      Alert.alert(
        "Wrong hint!",
        "Please give right hint to the opponent",
        [{ text: "OK" }],
        { cancelable: false }
      );
      return;
    }

    const randomNumber = randomNumberGenerate(1, guessNumber);
    setGuessNumber(randomNumber);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          ...Styles.card,
          ...styles.card,
        }}
      >
        <Text style={styles.opponentsNumber}>Opponent's Number Is</Text>
        <Text style={styles.guessNumber}>{guessNumber}</Text>
      </View>
      {correct ? (
        <View style={styles.buttonContainer}>
          <View style={styles.correctButton}>
            <Button onPress={restartGame} color="white" title="CORRECT!" />
          </View>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <View style={styles.lowerButton}>
            <Button onPress={lowerGuessNumber} color="white" title="LOWER" />
          </View>
          <View style={styles.greaterButton}>
            <Button onPress={upperGuessNumber} color="white" title="GREATER" />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainColor,
    alignItems: "center",
  },
  card: {
    alignItems: "center",
    marginTop: 20,
  },
  opponentsNumber: {
    color: "white",
  },
  guessNumber: {
    color: "white",
    fontSize: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    width: 300,
    maxWidth: "80%",
    justifyContent: "center",
    marginTop: 50,
  },
  lowerButton: {
    padding: 4,
    borderRadius: 7,
    backgroundColor: Colors.red,
    marginRight: 10,
  },
  greaterButton: {
    padding: 4,
    borderRadius: 7,
    backgroundColor: Colors.deepBlue,
  },
  correctButton: {
    padding: 4,
    borderRadius: 7,
    backgroundColor: Colors.green,
  },
});

export default GameScreen;
