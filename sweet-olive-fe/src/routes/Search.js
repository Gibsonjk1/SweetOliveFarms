import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText
  } from "reactstrap";
import {Link, Redirect} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import './Search.css';

function Search({searchData}){
    let data = searchData

    if (!data) return <Redirect to='/' />

    return(
        <div className="search-left">
        <h2> Search Results:</h2>
      {data.map(result => (
          <section key={uuid()}>
              <Card>
                <CardBody>
                    <Link to={`/post/${result.slug}`}>
                  <CardTitle className="font-weight-bold">
                  <div dangerouslySetInnerHTML={{__html: result.title.rendered}}></div>
                  </CardTitle>
                  </Link>
                  <CardText dangerouslySetInnerHTML={{__html: result.excerpt.rendered}}>
                  </CardText>
                </CardBody>
              </Card>
            </section>
    ))}
        </div>
    );
}

export default Search;