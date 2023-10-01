import React from "react"
import './index.css'
import Education from "../education/Education"

const About = () => {


    return (
        <section id="about-me">
            <h3 id="about" className="topic-title">About Me</h3>
            <div id="container-text-about">
                
                <Education />
                <p className="text-about">Hello! Welcome to my portfolio, a space where I share some of the projects I've had the opportunity to develop throughout my career as a developer. Here, you will find a sample of my work and be able to explore different solutions I've created to tackle challenges in the digital world.</p>
                <p className="text-about">My journey in this fascinating field of programming began in 2020 when I voluntarily developed a desktop application for a local pizzeria. The goal was to optimize the establishment's internal processes, making them more efficient and agile. This experience was a transformative milestone as I was able to firsthand experience the positive impact that technology can bring to businesses.</p>
                <p className="text-about">From that moment on, I decided to dedicate my professional life to software development, aiming to create solutions that streamline people's daily lives and contribute to the simplification of complex tasks. My motivation is to reduce efforts and provide tools that drive the growth and success of individuals.</p>
            </div>
        </section>
    )
}


export default About