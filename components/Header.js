import { Image, StyleSheet, Text, View } from "react-native";

import React from "react";
import colors from "../constants/colors";
import dd from "../assets/images/dd.png";

const Header = ({ title, newStyles }) => {
  return (
    <View style={styles.header}>
        <Text style={{...styles.headerTitle, ...newStyles}}>{title}</Text>
        <Image style={styles.imageContainer} source={dd} />          
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection:'row',
    backgroundColor: colors.primary,
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: colors.white,
    fontSize: 22,
  },
  imageContainer:{
    height: 30,
    width: 30,
    marginStart:10
  }
});