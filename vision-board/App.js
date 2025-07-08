import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addGoalHandler = (goalText) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), text: goalText },
    ]);
    setModalVisible(false);
  };

  const deleteGoalHandler = (id) => {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#a065ec" onPress={() => setModalVisible(true)} />
      <GoalInput
        visible={modalVisible}
        onAddGoal={addGoalHandler}
        onCancel={() => setModalVisible(false)}
      />
      <FlatList
        data={goals}
        renderItem={({ item }) => (
          <GoalItem text={item.text} id={item.id} onDelete={deleteGoalHandler} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#311b6b', 
  },
  listContainer: {
    paddingBottom: 100,
  },
});
