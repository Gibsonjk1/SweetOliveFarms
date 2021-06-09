import React, {useContext} from "react"
import './Recipes.css'
import AppContext from '../Context'

function Recipes(){

    let {setIsLoading} = useContext(AppContext)
    return(
        <>
        <div className="recipes-main">
            <a href="/recipes/sweet" onClick={() => {setIsLoading(true)}} className="recipes-inner sweet">Sweet</a>
            <a href="/recipes/savory" onClick={() => {setIsLoading(true)}} className="recipes-inner savory">Savory</a>
            <a href="/recipes/tea-time" onClick={() => {setIsLoading(true)}} className="recipes-inner teatime">Tea Time</a>
            <a href="/recipes/bath-and-body" onClick={() => {setIsLoading(true)}} className="recipes-inner bath-and-body">Bath and Body</a>
            <a href="/recipes/lavender" onClick={() => {setIsLoading(true)}} className="recipes-inner lavender">Lavender</a>
        </div>
        </>
    );
}

export default Recipes;