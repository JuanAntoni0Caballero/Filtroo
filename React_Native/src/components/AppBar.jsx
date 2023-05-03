import React from "react";
import { StyleSheet, Text, View } from "react-native";


const AppBar = () => {

    return (
        <View style={styles.container} >
            <Text style={styles.font}>Filtroo</Text>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
    },
    font: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'blue',
        textAlign: 'center',
    }
})



export default AppBar