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
        console.log(res)
        let post = JSON.parse(res.post)
        let title = post[0].title.rendered
        let content = post[0].content.rendered
        setTitle(title);
        setContent(content);
        setIsLoading(false)
    },[])

    return(
        <>
        <div className="home-main">
            <div className="home-inner plants">
                <div className="wrapper">
            <Link to="/plants">Plants</Link>
                </div>
            </div>
            <div className="home-inner recipes">
                <div className="wrapper">
            <Link to="/recipes">Recipes</Link>
                </div>
            </div>
            <div className="home-inner projects">
                <div className="wrapper">
            <Link to="/projects">Projects</Link>
                </div>
            </div>
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