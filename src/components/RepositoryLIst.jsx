import React from "react"
import { FlatList, View, Text, Image, StyleSheet } from "react-native"
import repositoires from '../data/repositories.js'

const ReposList = () => {

    return (
        <FlatList
            style={styles.card}
            data={repositoires}
            numColumns={2}
            renderItem={({ item: elm }) => (
                < View style={styles.container} key={elm.id}>
                    <Text style={styles.font}>{elm.author}</Text>
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
        padding: 10,
        margin: 20,

    },

    container: {
        paddingTop: 50,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 4
    },
    font: {
        fontWeight: 'bold',
        fontSize: 20,
    }
})

{/* <Col.LRT>
  <Red />
  <Green />
  <Blue />
</Col.LRT> */}

export default ReposList