import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import { useState } from "react";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(key) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== key);
    });
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <GoalInput
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                onDeleteItem={deleteGoalHandler}
                text={itemData.item.text}
                key={itemData.item.key}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },

  goalsContainer: {
    flex: 5,
  },
});
