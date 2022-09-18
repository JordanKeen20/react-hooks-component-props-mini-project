import React from "react";

const defaultURL = "https://via.placeholder.com/215"

function About({image = defaultURL, about}){
    return(
        <aside>
            <img src= {image} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}

export default About;