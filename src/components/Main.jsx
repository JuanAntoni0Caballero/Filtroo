import React from "react"
import { View, Text } from "react-native"
import ReposList from "./RepositoryLIst"
import AppBar from "./AppBar"
import { Switch } from "react-native-web"
import { Route, Redirect } from "react-router-native"



const Main = () => {
    return (
        <View >
            <AppBar />
            <Switch>
                <Route path='/' exact>
                    <ReposList />
                </Route>
                <Route path="/singin" exact>
                    <Text>In progres</Text>
                </Route>
                <Redirect to='/' />
            </Switch>
        </View>
    )
}


export default Main