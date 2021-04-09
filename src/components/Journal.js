import React, {useState} from "react";
import "./Journal.css";
import { NavBar} from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews";

export const Journal = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("journal_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("journal_user", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("journal_user") !== null)
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("journal_user") !== null)
      }

    return (
        <>
            <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
            <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated}/>
        </>
    )
}