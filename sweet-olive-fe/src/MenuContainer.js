import React, {useState} from "react"
import Menu from './Menu'
import './MenuContainer.css'
import { faBars, faSearch} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram, faPinterest} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MenuContainer({search}){

    const [visible, setVisible] = useState(true);
    const [formData, setFormData] = useState({search: ""})

    function toggleVisible(){
        setVisible(!visible)
        document.getElementById('menu').className=`visible-${visible}`
    }
    
    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
        search(formData);
        document.getElementById('searchButton').reset();

    }

    return(
        <>
        <div className="MenuContainer-right">
        <span>
            <form id="searchButton">
                <input type="text" id="search" name="search" placeholder="Search" onChange={handleChange}/>
                <button onClick={handleSubmit}><FontAwesomeIcon icon={faSearch} /></button>    
            </form>
            <FontAwesomeIcon icon={faFacebook} /> &nbsp;
            <FontAwesomeIcon icon={faInstagram} /> &nbsp;
            <FontAwesomeIcon icon={faPinterest} />
        </span>
        &nbsp;  &nbsp;  &nbsp;
        <span onClick={toggleVisible}><FontAwesomeIcon icon={faBars} /></span>
        </div>
        <Menu toggle={toggleVisible}/>
        <hr />
        </>
    );
}

export default MenuContainer;