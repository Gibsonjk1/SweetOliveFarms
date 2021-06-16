import React, {useState, useRef} from "react"
import {Route, Switch, Redirect, useHistory} from 'react-router-dom'
import Logo from './Logo'
import Home from './routes/Home'
import Plants from './routes/Plants'
import Recipes from './routes/Recipes'
import MenuContainer from './MenuContainer'
import Posts from './Posts'
import Search from './routes/Search'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import axios from "axios"
import AppContext from "./Context"
import Post from "./routes/Post"
import Projects from './routes/Projects'
import Footer from './Footer'


library.add(fab)

function App() {
  const BASE_URL = 'http://sweetolivefarms.com/wp-json/wp/v2'

  const [searchData, setSearchData] = useState();
  const [postData, setPostData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const post = useRef();
  

  let history = useHistory();

  
  async function search(formData){
    let searchTerm = formData.search;
    let res = await axios.get(`${BASE_URL}/posts?search=${searchTerm}`)
    let data = res.data;
    setSearchData(data);
    history.push('/search')
  };

  async function paramPosts(category){
    let posts = await axios.get(`${BASE_URL}/posts?categories=${category}`)
    let data = posts.data;
    post.current = data
    setPostData(post.current)
    setIsLoading(!isLoading)

}

  return (
    <div className="App">
      <div id="page-wrap">
       <AppContext.Provider value={{post, postData, paramPosts, isLoading, setIsLoading, BASE_URL }}>
      <MenuContainer search={search}/>
      <Logo />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/plants">
            <Plants />
          </Route>
          <Route exact path="/plants/:handle">
            <Posts />
          </Route>
          <Route exact path="/recipes">
            <Recipes />
          </Route>
          <Route path="/recipes/:handle">
            <Posts />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route path="/projects/:handle">
            <Posts />
          </Route>
          <Route path="/post/:handle">
            <Post />
          </Route>
          <Route path="/search">
            <Search searchData={searchData}/>
          </Route>
          <Redirect to="/" />
        </Switch>
        </AppContext.Provider>
        </div>
        <Footer />
       
    </div>
  );
}

export default App;
