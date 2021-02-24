import '../css/article.css'
import{NavLink} from'react-router-dom'
import data from '../Data'
import React, {useState} from 'react'



const Article = () => {
    const[article]=useState(data)

    return(
        <>
        {article.map((article)=>{

            const {id,title,content,tags}=article
            const link="blog/"+article.id

            return (
                <div className="article" key={id} >
                    <h2 className="title-article">{title}</h2>
                    <p className="content-article">{content.substring(0,300)}...</p>
                    <p className="tags-article">{tags.join(', ')}</p>
                    <NavLink to = {link}><button>Voir plus</button></NavLink>
                    
                </div>
        )
        })}
        </>
    )    
}

export default Article
