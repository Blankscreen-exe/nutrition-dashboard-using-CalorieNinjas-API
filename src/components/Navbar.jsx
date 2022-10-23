import React from "react";
import dietLogo from '/diet-logo.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={dietLogo} className="nav--logo"/>
            <h1 className="nav--heading"><span className="red">Nutrition</span> <span className="gray">Dashboard</span></h1>
        </nav>
    )
} 