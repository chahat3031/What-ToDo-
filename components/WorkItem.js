import { StyleSheet, Text, View, Pressable } from "react-native";

function WorkItem(props) {
  return (
    <View style={styles.workItem}>
      <Pressable
        android_ripple={{ color: "#dda0dd" }} //only works for android not for ios
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem} //for some effect like ripple in ios tooo
      >
        <Text style={styles.workText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default WorkItem;

const styles = StyleSheet.create({
  workItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#b0c4de",
  },
  pressedItem: {
    opacity: 0.5,
  },
  workText: {
    color: "white",
    padding: 8,
  },
});
