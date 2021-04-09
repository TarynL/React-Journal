import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../Home"
import { EntryList} from "./entry/EntryList"
import {EntryDetail} from "./entry/EntryDetail"
import {EntryEditForm} from "./entry/EntryEditForm"

export const ApplicationViews = () => {
    return (
        <>

            <Route exact path="/">
                <Home />
            </Route>


            <Route exact path="/entries">
                <EntryList/>
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