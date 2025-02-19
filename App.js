import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BMI from './BMI/BMI';
import Box from './codedemo';
import App1 from './demo';
import Home from './login-signUp/home';
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <BMI/>
    <>
    {/* <Box></Box> */}
    <App1></App1>
    <Home></Home>
    </>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
