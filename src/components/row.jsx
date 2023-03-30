import React from "react";
import Arrow from "./img/arrow.png";
import Controller from "./img/controller.png";
import Add from "./img/add.png";

function Row(){
    return(
        <div className="row">
            <div className="col-1">
                <h2>PS4 V2<br/>Dualshock 4</h2>
                <h3>Wireless Controller for PlayStation 4</h3>
                <p>(Compatible/Generic)</p>
                <h4>$32.50</h4>
                <button type="button">Buy Now<img src={Arrow} alt="arrow-img"/></button>
            </div>
            <div className="col-2">
                <img className="controller" src={Controller} alt="controller-img"/>
                <div className="color-box"></div>
                <div className="add-btn">
                    <img src={Add} alt="Add-img"/>
                    <p><small>Add to Cart</small></p>
                </div>
            </div>
        </div>
    )
}

export default Row