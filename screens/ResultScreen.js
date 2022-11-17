import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import colors from "../constants/colors";
import lose from "../assets/images/lose.png";
import win from "../assets/images/win.png";

const ResultScreen = ({ result, reini }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    handleImage();
  }, []);

  const handleImage = () => {
    if (result === "GANADOR") {
      setImage(win);
      return;
    }
    setImage(lose);
  };

  return (
    <View style={styles.container}>
      <Card>
        <Text>{`ERES UN ${result}`}</Text>
      </Card>
      <Image style={styles.imageContainer} source={image} />
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.restarButton}
          onPress={reini}
        >
          <Text style={{ color: "white" }}>REINICIAR JUEGO</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: 320,
    width: 320,
    marginTop: 50,
  },
  restarButton:{
    marginTop:20,
    backgroundColor: colors.primary,
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  }
});