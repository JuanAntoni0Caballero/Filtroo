import React from "react"
import { StyleSheet, Text, View } from "react-native"
import ReposList from "./RepositoryLIst"


const Main = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.font}>Filtroo</Text>
            <ReposList />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 30,
    },
    font: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'blue'
    }
})



export default Main