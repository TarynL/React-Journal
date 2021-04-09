import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = ({clearUser, isAuthenticated}) => {
    const history = useHistory()

    const handleLogout = () => {
        clearUser();
        history.push('/');
    }

    return (
        <ul className="navbar">
            <picture><img src={require('../images/LogoT.png')} alt="logo" /></picture>

            {isAuthenticated
                ? <li className="navbar__item active">
                    <Link className="navbar__link" to="/">Home</Link>
                </li>
                : null}

            {isAuthenticated
                ? <li className="navbar__item">
                    <Link className="navbar__link" to="/entries">Past Thoughts</Link>
                </li>
                : null}

            {isAuthenticated
                ? <li className="navbar__item">
                    <Link className="navbar__link" to="/login" onClick={handleLogout}>Logout </Link>
                </li>
                : <li className="navbar__item">
                    <Link className="navbar__link" to="/login">Login</Link>
                </li>}
        </ul>
    )
}