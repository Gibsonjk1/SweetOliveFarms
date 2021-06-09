import React, {useContext} from "react"
import './Plants.css'
import {Link} from 'react-router-dom'
import AppContext from '../Context'

function Plants(){
    let {setIsLoading} = useContext(AppContext)
    return(
        <>
        <div className="plants-main">
            <Link to="/plants/annuals" onClick={() => {setIsLoading(true)}} className="plants-inner annuals"> Annuals</Link>
            <Link to="/plants/perennials" onClick={() => {setIsLoading(true)}} className="plants-inner perennials">Perennials</Link>
            <Link to="/plants/fruits" onClick={() => {setIsLoading(true)}} className="plants-inner fruits">Fruits</Link>
            <Link to="/plants/veggies" onClick={() => {setIsLoading(true)}} className="plants-inner veggies">Veggies</Link>
        </div>
        </>
    );
}

export default Plants;