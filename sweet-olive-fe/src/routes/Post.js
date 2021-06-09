import React, {useState, useEffect, useContext}from "react"
import {useParams} from 'react-router-dom'
import './Post.css'
import axios from 'axios'
import Loading from "../Loading";
import AppContext from '../Context'
import Comments from '../Comments'

function Post(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState('');
    const [post, setPost] = useState()
    let {isLoading, setIsLoading} = useContext(AppContext);
    

    const {handle} = useParams()
    useEffect(
    async function getTitle(){
        let res = await axios.get(`http://sweetolivefarms.com/wp-json/wp/v2/posts?slug=${handle}`)
        let title = res.data[0].title.rendered
        let content = res.data[0].content.rendered
        let postId = res.data[0].id
        setTitle(title);
        setContent(content);
        setPost(postId)
        setIsLoading(false)
    },[])
    if (isLoading) return <Loading />
    return(
        <>
        <div className='home-post'>
            <div className='home-title' dangerouslySetInnerHTML={{__html: title}}></div>
            <div className='home-content'dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
        <Comments post={post}/>
        </>
    );
}


export default Post;