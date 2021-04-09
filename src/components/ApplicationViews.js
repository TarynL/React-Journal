import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from "../Home"
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";
import { EntryList} from "./entry/EntryList"
import {EntryDetail} from "./entry/EntryDetail"
import {EntryEditForm} from "./entry/EntryEditForm"


export const ApplicationViews = ({setAuthUser, isAuthenticated}) => {
    return (
        <>

            <Route exact path="/">
            {isAuthenticated ? <Home /> : <Redirect to="/login" />}
            </Route>

            <Route path="/login">
            <Login setAuthUser={setAuthUser}/>
            </Route>

            <Route path="/register">
            <Register setAuthUser={setAuthUser}/>
            </Route>


            <Route exact path="/entries">
                {isAuthenticated ? <EntryList/> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/entries/:entryId(\d+)">
                <EntryDetail />
            </Route>

            <Route path="/entries/:entryId(\d+)/edit">
                <EntryEditForm />
            </Route>



        </>
    )
}