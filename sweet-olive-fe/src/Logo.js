import React from "react"
import './Logo.css'
import mainlogo from "./img/sof-logo2.PNG"

function Logo(){
    return(
        <a href="/" target="/" > <img src={mainlogo}  id="Logo" alt="Sweet Olive Farms Logo" /></a>
    );
}

export default Logo;