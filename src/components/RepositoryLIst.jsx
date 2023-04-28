import React from "react"
import { FlatList, View, Text, Image, StyleSheet } from "react-native"
import repositoires from '../data/repositories.js'

const ReposList = () => {

    return (
        <FlatList

            data={repositoires}
            numColumns={2}
            renderItem={({ item: elm }) => (
                < View key={elm.id} style={styles.card}>
                    <Text style={styles.text}>{elm.author}</Text>
                    <Image style={styles.image} source={{ uri: elm.download_url }} />
                </View>
            )
            }
        >

        </FlatList >
    )
}


const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,

    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',

    }
})

export default ReposList