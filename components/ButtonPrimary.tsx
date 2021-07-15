import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function ButtonPrimary(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#FFC325',
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontFamily:'Euro-Bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});