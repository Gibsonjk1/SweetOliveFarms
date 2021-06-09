import React from "react"
import './Menu.css'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Menu({toggle}){
    return(
        <>
        <div id="menu" className="visible-false">
        <div className="menu-left" onClick={() => toggle()}><FontAwesomeIcon icon={faTimes} /></div>
        
            <ul>
                <li><a href="/plants">Plants</a></li>
                <li><a href="/recipes">Recipes</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/about-us">About Us</a></li>
            </ul>
        </div>
        </>
    );
}

export default Menu;