import React, {useState, useEffect}from "react";
import './Comments.css';
import axios from 'axios';

import {v4 as uuid} from 'uuid';

import CommentModal from './CommentModal'



function Comments({post}){
    const [data, setData] = useState("");

    
    
    useEffect(
    async function getTitle(){
        let res = await axios.get(`http://sweetolivefarms.com/wp-json/wp/v2/comments?post=${post}`)
        let data = res.data
        setData(data);
    },[])
    


    function handleSubmit(){
    //    return <CreateComment post={post} createComment={createComment} />
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    }

    

  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
  console.log(data)
    return(
        <>
        <h2>Comments:</h2>
        <button onClick={handleSubmit}>Leave a Comment</button>
        {data ? data.map(result => (
            (result.status === "approved") ?
        <div className='comments-comment' key={uuid()}>
             <img src={result.author_avatar_urls[24]} alt="user avatar" />
             <span className='comments-author'> {result.author_name} </span>
             <div className='comments-content'dangerouslySetInnerHTML={{__html: result.content.rendered}}></div>
         </div>
         : ""
        )
        ): ""}
        <CommentModal post={post}/>
        </>
    );
}


export default Comments;