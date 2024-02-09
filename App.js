import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Calculator = ({ input, resultado, handleButtonPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.result}>{resultado}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '=', '+'].map((button, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => handleButtonPress(button)}
          >
            <Text style={styles.buttonText}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#66456d79',
    flex: 1,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    alignItems: 'flex-end',
  },
  input: {
    fontSize: 30,
  },
  result: {
    fontSize: 20,
    color: 'gray',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '25%',
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    fontSize: 24,
  },
});

export default Calculator;
