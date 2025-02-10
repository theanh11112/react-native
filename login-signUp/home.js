import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import logo from './logo.1e50d952.svg';

export default function Home() {
  const [isSignUp, setIsSignUp] = useState(false); // Trạng thái hiện tại (đăng nhập hay đăng ký)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Hàm chuyển đổi giữa màn hình đăng nhập và đăng ký
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  // Hàm xử lý đăng nhập
  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please fill in both username and password');
      return;
    }

    try {
      const response = await axios.post('https://example.com/api/login', {
        username,
        password,
      });

      if (response.data.success) {
        Alert.alert('Success', 'Login successful!');
        // Xử lý login thành công (ví dụ: lưu token)
      } else {
        Alert.alert('Error', 'Invalid username or password');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    }
  };

  // Hàm xử lý đăng ký
  const handleSignUp = async () => {
    if (!username || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('https://example.com/api/signup', {
        username,
        password,
      });

      if (response.data.success) {
        Alert.alert('Success', 'Sign up successful!');
        // Xử lý đăng ký thành công
      } else {
        Alert.alert('Error', 'Signup failed');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <View style={styles.container}>
      {/* Hiển thị hình ảnh SVG */}
      <View style={styles.header}>
        <img src={logo} alt="Logo" />
      </View>

      <View>
        <Text style={styles.text}>Login Template</Text>
        <Text style={styles.text1}>
          The easiest way to start with your amazing application
        </Text>

        {/* Hiển thị form theo trạng thái đăng nhập hoặc đăng ký */}
        {isSignUp ? (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              keyboardType="default"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={true}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity style={styles.login} onPress={handleSignUp}>
              <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              keyboardType="default"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.login} onPress={handleLogin}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Chuyển đổi giữa màn hình đăng nhập và đăng ký */}
        <Text style={styles.signupText}>
          {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
          <Text style={styles.link} onPress={toggleForm}>
            {isSignUp ? 'Login' : 'Sign up'}
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start', // Align items at the top
    alignItems: 'center',         // Center items horizontally
    flex: 1,                      // Take up full screen height
    paddingTop: 200,              // Adds space from the top of the screen to the logo
  },
  header: {
    width: '250px',               // Set the width of the logo container
    height: 'auto',               // Automatically adjust the height based on content
    marginBottom: 15,             // Add some space below the logo
  },
  text: {
    fontSize: 45,                 // Increase font size
    color: '#5024c4',             // Set text color
    fontWeight: 'bold',           // Make text bold
    textAlign: 'center',
    marginBottom: 15,
  },
  text1: {
    fontSize: 20,                 // Increase font size
    color: 'black',               // Set text color
    fontWeight: 'bold',           // Make text bold
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',               // Make inputs take up most of the container width
    marginBottom: 20,
    justifyContent: 'space-between', // Space out the inputs evenly
    alignItems: 'center',            // Center the inputs horizontally
  },
  input: {
    height: 40,                   // Set input height
    borderColor: '#ccc',          // Border color for inputs
    borderWidth: 1,               // Set border width
    marginBottom: 15,             // Space between inputs
    paddingLeft: 10,              // Padding inside input
    borderRadius: 5,              // Rounded corners
    width: '80%',                 // Make input width 80% of the container width
  },
  login: {
    backgroundColor: '#5024c4',   // Background color for the button
    borderRadius: 5,               // Rounded corners for button
    paddingVertical: 8,            // Vertical padding
    paddingHorizontal: 15,         // Horizontal padding
    alignItems: 'center',          // Center the text inside the button
    justifyContent: 'center',      // Center the content vertically
    marginTop: 20,                 // Add top margin for spacing
    width: '80%',                  // Set the width to match the input fields
    alignSelf: 'center',           // Center the button horizontally
  },
  loginText: {
    color: 'white',                // Text color for the button
    fontSize: 16,                  // Font size for the text
    fontWeight: 'bold',            // Make text bold
  },
  signupText: {
    fontSize: 16,                  // Font size for the signup text
    textAlign: 'center',
    marginTop: 10,
  },
  link: {
    color: '#5024c4',              // Link color for the "Sign up" or "Login" text
    fontWeight: 'bold',
  },
});
