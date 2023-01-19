import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

function WorkInput(props) {
  const [enteredWorkText, setEnteredWorkText] = useState("");

  function todoInputHandler(enteredText) {
    setEnteredWorkText(enteredText);
  }

  function addWorkHandler() {
    props.onAddWork(enteredWorkText);
    setEnteredWorkText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/icon.jpeg")}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="My todo list for today!"
          onChangeText={todoInputHandler}
          value={enteredWorkText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add work" onPress={addWorkHandler} color="#008b8b" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#4682b4" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default WorkInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff5ee",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
    marginBottom: 26,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
    backgroundColor: "#778899",
    color: "#e0ffff",
    width: "100%",
    padding: 14,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
