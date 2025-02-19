import React from "react";
import { View, Text, StyleSheet, Image, Button, ScrollView, FlatList } from "react-native";

const Data = [
    {id: 1, title: "Product A " },
    {id: 2, title: "Product B " },
    {id: 3, title: "Product C " },
    {id: 4, title: "Product D " },
    {id: 5, title: "Product E " },
    {id: 6, title: "Product F " },
]
export default function Practice () {
    return (
        <View style= {styles.container}>
            {/* text */}
            <Text style= {styles.title}>Chào mừng bạn đến với React Native!</Text>
            <Text style= {styles.subtitle}>Đây là ứng dụng đầu tiên của bạn 🚀</Text>
            {/* images */}
            <Image source= {{uri: "https://reactnative.dev/img/tiny_logo.png"}} style= {styles.image}/>
            {/* <Image source={require("../assets/logo.png")} style={styles.image} /> */}
            {/* button */}
            <Button title="Nhấn vào đây" onPress={() => alert("An xinh gái!")}  />
            {/* ScrollView */}
            <ScrollView style={{marginTop: 20}}>
                <Text style= {styles.item}>Mục 1</Text>
                <Text style= {styles.item}>Mục 2</Text>
                <Text style= {styles.item}>Mục 3</Text>
                <Text style= {styles.item}>Mục 4</Text>
                <Text style= {styles.item}>Mục 5</Text>
                <Text style= {styles.item}>Mục 6</Text>
            </ScrollView>
            
            {/* FlatList */}
            <FlatList 
            data={Data} 
            keyExtractor={(item) => item.id} 
            renderItem={({item}) => <Text style= {styles.item}> {item.title}</Text>}>
            </FlatList>

        </View>
    )
}
// button han che style len phai su dung touchableOpacity neu muon tuy chinh UI
const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: "center",
       alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight:'bold',
        color: 'blue'
    },
    subtitle: {
        marginTop:10,
        fontSize: 18,
        color: 'pink'
    },
    image: {
        marginTop:30,
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 20,
    },
    item: {
        fontSize: 24,
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#333",
    }
    
    
})