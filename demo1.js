import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App2 = ({color,text}) => {
  return (
    <View style={[styles.box , {backgroundColor: color}]}>
          <Text style={styles.text}>{text}</Text>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  row: {
    flexDirection: 'row',
    // marginBottom: 10,
  },
  box: {
    flex: 1,
    margin: 5,
    height: 100,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App2;
