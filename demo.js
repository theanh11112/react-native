import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import App2 from './demo1';

const App1 = () => {
  return (
    <View style={styles.container}>
      {/* Hàng 1 */}
      <View style={styles.row}>
        <App2 color={'black'} text={'box1'}/>
        <App2 color="#33FF57" text={'box2'} />
        <App2 color="#3357FF" text={'box3'}/>
      </View>

      {/* Hàng 2 */}
      <View style={styles.row}>
        <App2 color="#FF5733" text={'box4'}/>
        <App2 color="#33FF57" text={'box5'}/>
        <App2 color="#3357FF" text={'box6'}/>
        </View>
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

export default App1;
