import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";



const AppBarTab = ({ active, children, to }) => {
    return (
        <Link to={to}>
            <Text>
                {children}
            </Text>
        </Link>

    )
}

const AppBar = () => {

    return (
        <View style={styles.container} >
            <Text style={styles.font}>Filtroo</Text>
            <AppBarTab active to='/'>Imagenes</AppBarTab>
            <AppBarTab active to='/sinin'>SinIn</AppBarTab>

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