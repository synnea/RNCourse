import { TextInput, Button, StyleSheet } from "react-native";

function GoalInput(props) {
  return (
    <>
      <TextInput
        onChangeText={props.goalInputHandler}
        style={styles.textInput}
        placeholder="Your course goal!"
      />
      <Button onPress={props.addGoalHandler} title="Add Goal" />
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
