import React from 'react'
import '../css/blog.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from '../components/form'
import Article from '../components/Article'
import{NavLink} from'react-router-dom'

 
const routes=[
    {path: '/', name:"allAticle", Component: Article},
    {path: '/form', name:"Form", Component: Form},
  ]


const Blog = () => {

    return (
        

        <>
            <Router>
            <h1>BLOG</h1>
            <button><NavLink to="/">Les articles</NavLink></button>

            <button><NavLink to="/form">creer un article</NavLink></button>
            <Switch>
            {routes.map(({path, Component})=>(
              <Route key={path} path={path} exact >
                {()=>(
                      <>
                        <Component/>
                      </>
                )}
              </Route>
            ))};
            </Switch>
            </Router>


        </>
    )
}

export default Blog
