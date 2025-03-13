import { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal, Image } from "react-native";

const GoalInput = ({ addGoalHandler, modalIsVisible, setModalIsVisible }) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const onAddGoalHandler = () => {
        addGoalHandler(enteredGoal);
        setModalIsVisible(false);
        setEnteredGoal('');
    }

    return (
        <Modal visible={modalIsVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonsContainer}>
                    <Button title="Add goal" onPress={onAddGoalHandler} color="#ab54ce" />
                    <Button title="Cancel" onPress={() => setModalIsVisible(false)} color="#dba5b2" />
                </View>

            </View>
        </Modal>
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
        color: 'white',
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        gap: 16,
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#4a148c',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: "center",
        marginVertical: 30,
        borderRadius: 5,
    }
})