import { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const GoalInput = ({ addGoalHandler }) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const onAddGoalHandler = () => {
        addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Your course goal!"
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="Add goal" onPress={onAddGoalHandler} />
        </View>
    )
}


export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        borderColor: '#cccccc',
        borderWidth: 1,
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
})