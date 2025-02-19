import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

const AddStudent = ({navigation}) => {
    const [form, setForm] = useState({
        name: '',
        birth: '',
        mssv: '',
        class: '',
        department: ''
    });

    const [students, setStudents] = useState([{name: 'theanh', birth: 2004, mssv: 2005, class: '67cs2', department: 'cntt'}]);

    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const submitForm = () => {
        if (form.name && form.birth && form.mssv && form.class && form.department) {
            setStudents(prevStudents => [...prevStudents, { id: Date.now().toString(), ...form }]);
            setForm({ name: '', birth: '', mssv: '', class: '', department: '' });
            navigation.navigate("Detail", { form }) ;
        }
    };

   

    return (
        <View style={styles.container}>
            <Text style={styles.title}>NHẬP THÔNG TIN SINH VIÊN</Text>

            <Text style={styles.label}>Họ và tên</Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập họ và tên"
                value={form.name}
                onChangeText={(text) => handleChange('name', text)}
            />

            <Text style={styles.label}>Ngày sinh</Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập ngày sinh"
                value={form.birth}
                onChangeText={(text) => handleChange('birth', text)}
            />

            <Text style={styles.label}>MSSV</Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập MSSV"
                value={form.mssv}
                onChangeText={(text) => handleChange('mssv', text)}
            />

            <Text style={styles.label}>Lớp</Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập lớp"
                value={form.class}
                onChangeText={(text) => handleChange('class', text)}
            />

            <Text style={styles.label}>Khoa</Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập khoa"
                value={form.department}
                onChangeText={(text) => handleChange('department', text)}
            />

            <TouchableOpacity style={styles.button} onPress={submitForm}>
                <Text style={styles.buttonText}>Lưu lại</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#555',
    },
    input: {
        height: 40,
        borderColor: '#888',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 6,
        marginTop: 20,
        alignItems: 'center',
        alignSelf: 'center',
        width: 150,
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default AddStudent;
