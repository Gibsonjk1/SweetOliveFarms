import React from "react"
import './Logo.css'
import mainlogo from "./img/SOF-Logo.PNG"

function Logo(){
    return(
        <a href="/" target="/" > <img src={mainlogo}  id="Logo" alt="Sweet Olive Farms Logo" /></a>
    );
}

export default Logo;