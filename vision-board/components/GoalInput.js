import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet, Image } from 'react-native';

function GoalInput({ visible, onAddGoal, onCancel }) {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (text) => setEnteredGoal(text);

  const addGoal = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/target.png')} style={styles.image} />
        <TextInput
          placeholder="Your goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title="Add Goal" onPress={addGoal} /></View>
          <View style={styles.button}><Button title="Cancel" onPress={onCancel} color="red" /></View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
