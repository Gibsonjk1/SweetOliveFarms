import React, {useContext, useEffect}from "react"
import './Posts.css'
import {useParams, Link} from  'react-router-dom'
import AppContext from "./Context";
import Loading from './Loading'
import {v4 as uuid} from 'uuid';
import {
    Card,
    CardBody,
    CardTitle,
    CardText
  } from "reactstrap";

function Posts(){
    let {handle} = useParams();
    let categoryIdMap= {
        "annuals": "314",
        "perennials" : "311",
        "fruits": "312",
        "veggies": "313",
        "sweet": "22",
        "savory": "19",
        "lavender": "25",
        "tea-time": "289",
        "bath-and-body": '2',
        "garden": '8,9,24'

    }
  
    let {post, paramPosts, isLoading, setIsLoading} = useContext(AppContext)

    useEffect(()=>{
      paramPosts(categoryIdMap[handle])
    },[])

    let curr = post.current;
    function set(){
      setIsLoading(true)
    }
    if (isLoading) return <Loading />;
    
    return(
        <>
         <div className="posts-left">
        <h2> {handle.charAt(0).toUpperCase() + handle.slice(1)}</h2>
        
      { curr ? curr.map(result => (
          <section key={uuid()}>
              <Card>
                <CardBody>
                    <Link to={`/post/${result.slug}`} onClick={set}>
                  <CardTitle className="font-weight-bold">
                  <div dangerouslySetInnerHTML={{__html: result.title.rendered}}></div>
                  </CardTitle>
                  </Link>
                  <CardText dangerouslySetInnerHTML={{__html: result.excerpt.rendered}}>
                  </CardText>
                </CardBody>
              </Card>
            </section>
    )): <h1> are you lost?</h1>}
        </div>
        </>
    );
}


export default Posts;