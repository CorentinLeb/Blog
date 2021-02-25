import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../css/article.css'
import{NavLink} from'react-router-dom'




const Article = ({posts}) => {

    return(
        <>
        
        {posts.map((p) => {
            const { id, name, info, price} = p;
            const url = `/blog/${p.id}`
            

            return (
                <Router>
                    <Switch>
                        <Route path = {url} exact>
                            <h2>
                                Article deja lu
                            </h2>
                        </Route>
                    <Route path ='/blog' exact>
                <div className="article" key={id} >
                    <h2 className="title-article">{name}</h2>
                    <p className="content-article">{info.substring(0,300)}...</p>
                    <p className="tags-article">{price}</p>
                    <button><NavLink to={url}>Deja lu</NavLink></button>
                </div>
                    </Route>
                    </Switch>
                </Router>
        )
        })}
        </>
    )    
}

export default Article
