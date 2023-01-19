import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import WorkItem from "./components/WorkItem";
import WorkInput from "./components/WorkInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseWork, setCourseWork] = useState([]);

  function startAddWorkHandler() {
    setModalIsVisible(true);
  }
  function endAddWorkHandler() {
    setModalIsVisible(false);
  }
  function addWorkHandler(enteredWorkText) {
    setCourseWork((currentCourseWork) => [
      ...currentCourseWork,
      { text: enteredWorkText, id: Math.random().toString() },
    ]);
    endAddWorkHandler();
  }

  function deleteWorkHandler(id) {
    setCourseWork((currentCourseWork) => {
      return currentCourseWork.filter((work) => work.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <Button
          title="Add new Work"
          color="#008b8b"
          onPress={startAddWorkHandler}
        />
        <WorkInput
          visible={modalIsVisible}
          onAddWork={addWorkHandler}
          onCancel={endAddWorkHandler}
        />
        <View style={styles.listsContainer}>
          <FlatList
            data={courseWork}
            renderItem={(itemData) => {
              return (
                <WorkItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteWorkHandler}
                />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#fff5ee",
  },
  listsContainer: {
    flex: 5,
  },
});
