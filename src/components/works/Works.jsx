import React from "react"
import './style.css'

import Carousel from "./Carousel/Carousel"


const Works = () => {

    return (
        <section id="work">
            <h3 className="topic-title" id="work-title">Work</h3>
            <div id="works-container">
                <Carousel />
            </div>
        </section>
    )
}


export default Works