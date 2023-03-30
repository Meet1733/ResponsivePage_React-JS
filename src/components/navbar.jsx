import React from "react";
import { useState } from "react";
import logo from "./img/logo.png";
import menu from "./img/menu.png";

function Navbar() {

    const [height , setMenu] = useState('0px');
    const togglemenu = () => {
        if(height=== "0px")
        {
            setMenu("130px")
        }
        
        else
        {
            setMenu("0px")
        }
    }

    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="logo-img" />
            <nav>
                <ul id="m" style={{maxHeight:height}} > 
                    <li><a href="a">Game Controllers</a></li>
                    <li><a href="a">VR Accessories</a></li>
                    <li><a href="a">Media Remotes</a></li>
                    <li><a href="a">Others</a></li>
                </ul>
            </nav>
            <img className="menu-icon" src={menu} alt="menu-img" onClick={togglemenu}/>
        </div>
    );
}

export default Navbar