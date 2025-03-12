import { StyleSheet, Text } from 'react-native';

const GoalItem = ({ text }) => {
    return (
        <Text style={styles.goalItem}>{text}</Text>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        marginVertical: 8,
        padding: 8,
        color: 'white',
        borderRadius: 6,
        backgroundColor: '#6b2bbf',
      }
});