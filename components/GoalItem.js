import { StyleSheet, Text, Pressable, View } from 'react-native';

const GoalItem = ({ text, deleteItem }) => {
    return (
        <View style={styles.container}>
            <Pressable android_ripple={{ color: "#210644" }} style={({ pressed }) => pressed && styles.pressedItem} onPress={deleteItem}>
                <Text style={styles.goalItem}>{text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        borderRadius: 6,
        backgroundColor: '#6b2bbf',
    },
    goalItem: {
        padding: 8,
        color: 'white',
        borderRadius: 6,
    },
    pressedItem: {
        opacity: 0.5,
    }
});