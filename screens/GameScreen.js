import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { randomNumberGenerate } from "../utils/Utils";

const GameScreen = ({ answer }) => {
  const [guessNumber, setGuessNumber] = useState(0);

  useEffect(() => {
    const randomNumber = randomNumberGenerate(1, 99, answer);
    setGuessNumber(randomNumber);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{guessNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainColor,
  },
});

export default GameScreen;
