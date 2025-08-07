import React from "react"
import './index.css'
import Education from "../education/Education"

const Experience = () => {
    const experiences = [
        {
            company: "EloGroup",
            position: "Full Stack Developer",
            period: "02/2025 - (current)",
            description: "Digital transformation of public services through business process modeling and automation using the SydleOne platform (BPMS). Development of custom integrations and automations with JavaScript and ElasticSearch to meet specific demands of public clients. Responsible for creating process flows, automating manual tasks and optimizing public service management. Use of Azure DevOps for version control, backlog management and delivery organization following agile practices (SCRUM).",
            technologies: "JavaScript, ElasticSearch, SydleOne, Azure DevOps"
        },
        {
            company: "Simas Industrial",
            position: "Full Stack Developer",
            period: "2022 - 02/2025",
            description: "Maintenance of the main ERP and satellite systems, with continuous updates and technical support to users. Deployment management and implementation of new system versions. Requirements gathering and development of solutions aligned with sector needs. Migration of modules (Billing, Accounting, Inventory and BI) to web architecture based on microservices.",
            technologies: "Java (Spring Boot, Hibernate, Maven), Python (Django, FastAPI), JavaScript (Electron, Vue.js), Delphi (5 and 10), Power BI"
        }
    ];

    return (
        <div className="experience-section">
            <h4 className="section-subtitle">
                3.0 <i className="fas fa-solid fa-briefcase"></i> Experience
            </h4>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <div className="experience-header">
                            <h5 className="company-name">{exp.company}</h5>
                            <span className="experience-period">{exp.period}</span>
                        </div>
                        <h6 className="position-title">{exp.position}</h6>
                        <p className="experience-description">{exp.description}</p>
                        <div className="experience-technologies">
                            <strong>Technologies:</strong> {exp.technologies}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const About = () => {
    return (
        <section id="about-me">
            <h3 id="about" className="topic-title">About</h3>
            <div id="container-text-about">
                <div className="resume-section">
                    <h4 className="section-subtitle">
                        1.0 <i className="fas fa-solid fa-user"></i> Resume
                    </h4>
                    <p className="text-about">Hello! Welcome to my portfolio, a space where I share some of the projects I've had the opportunity to develop throughout my career as a developer. Here, you will find a sample of my work and be able to explore different solutions I've created to tackle challenges in the digital world.</p>
                    <p className="text-about">My journey in this fascinating field of programming began in 2020 when I voluntarily developed a desktop application for a local pizzeria. The goal was to optimize the establishment's internal processes, making them more efficient and agile. This experience was a transformative milestone as I was able to firsthand experience the positive impact that technology can bring to businesses.</p>
                    <p className="text-about">From that moment on, I decided to dedicate my professional life to software development, aiming to create solutions that streamline people's daily lives and contribute to the simplification of complex tasks. My motivation is to reduce efforts and provide tools that drive the growth and success of individuals.</p>
                </div>
                <Education />
                <Experience />
            </div>
        </section>
    )
}

export default About