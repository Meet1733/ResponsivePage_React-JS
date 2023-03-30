import React from "react";
import fb from "./img/fb.png";
import tw from "./img/tw.png";
import ig from "./img/ig.png";

function Social() {
    return(
        <div className="social-links"> 
            <img src={fb} alt="fb-img"/>
            <img src={tw} alt="tw-img"/>
            <img src={ig} alt="ig-img"/>
        </div>
    )
}

export default Social