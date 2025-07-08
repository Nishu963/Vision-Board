import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

function GoalItem({ text, id, onDelete }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={() => onDelete(id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    backgroundColor: '#5e0acc',
    borderRadius: 6,
    overflow: 'hidden',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 12,
    fontSize: 16,
  },
});

export default GoalItem;
