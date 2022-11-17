import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from "react-native";

import Card from "../components/Card";
import colors from "../constants/colors";

const StartGameScreen = ({ onStartGame }) => {

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "height" : "padding"}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.screen}>
            <Card>
              <Text style={{marginBottom:20}}>Selecciona una opción</Text>
              <View style={styles.buttonContainer}>
                <Pressable
                  style={styles.cleanButton}
                  onPress={() => onStartGame('VERDAD')}
                >
                  <Text style={{ color: "white" }}>VERDAD</Text>
                </Pressable>
                <Pressable
                  style={{
                    ...styles.cleanButton,
                    ...styles.confirmButton,
                  }}
                  onPress={() => onStartGame('RETO')}
                >
                  <Text style={{ color: "white" }}>RETO</Text>
                </Pressable>
              </View>
            </Card>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    marginTop: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  cleanButton: {
    backgroundColor: colors.secondary,
    height: 35,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    width: "40%",
  },
});
  