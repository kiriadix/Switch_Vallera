import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import data from "../constants/data";

const GameScreen = ({ handleResult, action }) => {
  const [aleatorio, setAleatorio] = useState();
  const [desafio, setDesafio] = useState("");

  useEffect(() => {
    setAleatorio(Math.floor((Math.random() * (5 - 0 + 1)) + 0));
  }, []);

  

  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>{data[action][aleatorio]}</Text>
      <Card newStyles={styles.buttonContainer}>
        <Button
          title="PERDEDOR"
          onPress={() => handleResult("PERDEDOR")}
        />
        <Button
          title="GANADOR"
          onPress={() => handleResult("GANADOR")}
        />
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "80%",
  },
});