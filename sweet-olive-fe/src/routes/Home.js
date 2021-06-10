import React, {useState, useEffect, useContext} from "react"
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Home.css'
import AppContext from '../Context'
import Loading from "../Loading";
import SweetOliveApi from "../api"

function Home(){

    const [title, setTitle] = useState("");
    const [content, setContent] = useState('');
    let {isLoading, setIsLoading} = useContext(AppContext)
    
    useEffect(
    async function getTitle(){
        let res = await SweetOliveApi.getPost()
        // let res = await axios.get('http://sweetolivefarms.com/wp-json/wp/v2/posts?per_page=1')
        let title = res.data[0].title.rendered
        let content = res.data[0].content.rendered
        setTitle(title);
        setContent(content);
        setIsLoading(false)
    },[])

    return(
        <>
        <div className="home-main">
            <Link to="/plants" className="home-inner plants">Plants</Link>
            <Link to="/recipes" className="home-inner recipes">Recipes</Link>
            <Link to="/projects" className="home-inner projects">Projects</Link>
        </div>
        {isLoading ? <Loading />:
         <div className='home-post'>
         <div className='home-title' dangerouslySetInnerHTML={{__html: title}}></div>
         <hr />
         <div className='home-content'dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
        }
       
        </>
    );
}

export default Home;