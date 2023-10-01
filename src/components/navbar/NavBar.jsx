import React from "react"
import './index.css'


const NavBar = () => {

    return (
        <nav className="navbar" id="home">
            <a href="#home" className="link-nav">Home</a>
            <a href="#work" className="link-nav">Work</a>
            <a href="#about" className="link-nav">About</a>
            <a href="#skills" className="link-nav">Skills</a>
        </nav>
    )
}

export default NavBar