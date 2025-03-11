import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setGoals(currentGoals => ([...currentGoals, enteredGoal])); 
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler}/>
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
        <FlatList
          data={goals}
          renderItem={itemData => (
            <Text style={styles.goalItem}>{itemData.item}</Text>
          )}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24, 
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  goalsContainer: {
    flex: 5,
  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalItem: {
    marginVertical: 8,
    padding: 8,
    color: 'white',
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  }
});
 