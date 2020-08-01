import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [gameMode, setGameMode] = useState(false);
  const [answer, setAnswer] = useState();

  const startGame = (number) => {
    setGameMode(true);
    setAnswer(number);
  };

  return (
    <View style={styles.app}>
      <Header title={"Guess A Number"} />
      {gameMode ? (
        <GameScreen answer={answer} />
      ) : (
        <StartGameScreen startGame={startGame} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
