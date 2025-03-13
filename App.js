import { useState } from 'react';
import { StyleSheet, View, Button, Text, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

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
      <Button title="Add new goal" color="#a07fcc" onPress={() => setModalIsVisible(true)}/>
      <GoalInput addGoalHandler={addGoalHandler} modalIsVisible={modalIsVisible} setModalIsVisible={setModalIsVisible}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={itemData => <GoalItem text={itemData.item.text} deleteItem={() => deleteGoalHandler(itemData.item.id)} />}
          keyExtractor={item => item.id}
        />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#431331',
  },
  goalsContainer: {
    flex: 5,
  },
});
