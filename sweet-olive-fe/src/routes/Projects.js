import React, {useContext} from "react"
import './Projects.css'
import {Link} from 'react-router-dom'
import AppContext from '../Context'

function Projects(){
    let {setIsLoading} = useContext(AppContext)
    return(
        <>
        <div className="plants-main">
            <Link to="/projects/garden" onClick={() => {setIsLoading(true)}} className="projects-inner garden"> Garden</Link>
            <Link to="/projects/bath-and-body" onClick={() => {setIsLoading(true)}} className="projects-inner bath-and-body">Bath and Body</Link>
            <Link to="/projects/lavender" onClick={() => {setIsLoading(true)}} className="projects-inner lavender">Lavender</Link>
        </div>
        </>
    );
}

export default Projects;