import React from "react";
import logo from "./img/logo.png";
import menu from "./img/menu.png";

var menul = document.getElementById('menuList');
// menul.style.maxHeight = '0px';

    const togglemenu = () => {
    // alert("Hello");
    if(menul.style.maxHeight === "0px")
    {
        menul.style.maxHeight = "130px";
    }

    else
    {
        menul.style.maxHeight = "0px";
    }
}

function navbar() {
    return (
        <div className="navbar">
            <img className="logo" src={logo} alt="logo-img" />
            <nav>
                <ul id="menuList">
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

export default navbar