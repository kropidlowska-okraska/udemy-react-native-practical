import { useState } from 'react';
import { StyleSheet, View, Button, Text, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (enteredGoal) => {
    setGoals(currentGoals => ([...currentGoals, { text: enteredGoal, id: Math.random().toString() }]));
  }

  const deleteGoalHandler = (id) => {
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
        <FlatList
          data={goals}
          renderItem={itemData => <GoalItem text={itemData.item.text} deleteItem={() => deleteGoalHandler(itemData.item.id)} />}
          keyExtractor={item => item.id}
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
  goalsContainer: {
    flex: 5,
  },
});
