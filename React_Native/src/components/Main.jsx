import React from "react"
import { View, Text } from "react-native"
import ReposList from "./RepositoryLIst"
import AppBar from "./AppBar"



const Main = () => {
    return (
        <View >
            <AppBar />
            <ReposList />
        </View >
    )
}


export default Main



