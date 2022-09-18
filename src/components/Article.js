import React from 'react';

function Article({id, title, date = "January 1, 1970", preview}){
    return(
        <article>
        <h3>{title}</h3>
        <small key= {id}>{date}</small>
        <p>{preview}</p>
        </article>
    )
}

export default Article;