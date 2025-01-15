import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const BMI = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  return (
    <View style={styles.container}>
      {/* Label và Ô nhập liệu 1 */}
      <Text style={styles.label}> VUI LONG NHAP VAO CHIEU CAO </Text>
      <TextInput
        style={styles.input}
        placeholder="CHIEU CAO"
        value={input1}
        onChangeText={setInput1} // Cập nhật state cho input1
      />

      {/* Label và Ô nhập liệu 2 */}
      <Text style={styles.label}> VUI LONG NHAP VAO CAN NANG</Text>
      <TextInput
        style={styles.input}
        placeholder="CAN NANG"
        value={input2}
        onChangeText={setInput2} // Cập nhật state cho input2
      />

      {/* Hiển thị giá trị */}
      <Text style={styles.result}>Chi So BMI Cua Ban La : {input2/(input1**2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "gray",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default BMI;
