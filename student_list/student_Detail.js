import React from "react";
import { View, Text, Button  } from "react-native";

const  StudentDetail = ({form}) => {
    const {form} = route.params;
     return (
        <View>
            <Text style={{ fontSize: 20 }}>Tên: {form.name}</Text>
            <Text style={{ fontSize: 20 }}>Ngày sinh: {form.birth}</Text>
            <Text style={{ fontSize: 20 }}>MSSV: {form.mssv}</Text>
            <Text style={{ fontSize: 20 }}>Lớp: {form.class}</Text>
            <Text style={{ fontSize: 20 }}>Khoa: {form.department}</Text>
        </View>
     )
}

export default StudentDetail;