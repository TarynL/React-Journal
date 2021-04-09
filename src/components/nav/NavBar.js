import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <picture><img src={require('../images/LogoT.png')} alt = "logo"/></picture>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Enter a New Thought</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/entries">Check Out Past Thoughts</Link>
            </li>
            <li className="navbar_item">
                <button>Logout</button>
            </li>
        </ul>
    )
}