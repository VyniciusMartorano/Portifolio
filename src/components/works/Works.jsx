import React from "react"
import './style.css'
import { useState } from "react";
import { Navigate } from "react-router";

// Import project images
import spotify from "./../../assets/projects/spotify/spotify.jpeg";
import livebike from "./../../assets/projects/livebike/IMG_3776.jpg";
import mistermassas from "./../../assets/projects/mistermassas/mistermassas.jpeg";
import ecommerce from "./../../assets/projects/ecommerce/ecommerce.jpeg";
import woguess from "./../../assets/projects/woguess/woguess.jpeg";

// Import technology SVGs
import react from "./../../assets/svgs/react.svg";
import django from "./../../assets/svgs/django.svg";
import redux from "./../../assets/svgs/redux.svg";
import python from "./../../assets/svgs/python.svg";
import delphi from "./../../assets/svgs/delphi.svg";
import sqlserver from "./../../assets/svgs/sql-server.svg";
import bootstrap from "./../../assets/svgs/bootstrap.svg";
import postgres from "./../../assets/svgs/postgres.svg";
import html from "./../../assets/svgs/html.svg";
import css from "./../../assets/svgs/css.svg";
import javascript from "./../../assets/svgs/javascript.svg";

// Technology mapping
const techIcons = {
    "React": react,
    "Django": django,
    "Redux": redux,
    "Python": python,
    "Delphi": delphi,
    "SQL Server": sqlserver,
    "Bootstrap": bootstrap,
    "PostgreSQL": postgres,
    "HTML": html,
    "CSS": css,
    "JavaScript": javascript,
    "PyQt5": python, // Using Python icon for PyQt5
};

// Project Card Component
const ProjectCard = ({ img, title, subtitle, to, technologies }) => {
    const [redirect, setRedirect] = useState(false);

    return (
        <div className="project-card" onClick={() => setRedirect(true)}>
            <div className="project-card__image">
                <img src={img} alt={title} />
            </div>
            <div className="project-card__content">
                <h4 className="project-card__title">{title}</h4>
                <p className="project-card__subtitle">{subtitle}</p>
                {technologies && (
                    <div className="project-card__technologies">
                        {technologies.map((tech, index) => (
                            <div key={index} className="project-card__tech-tag" title={tech}>
                                {techIcons[tech] ? (
                                    <img src={techIcons[tech]} alt={tech} />
                                ) : (
                                    <span>{tech}</span>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="project-card__overlay">
                <span className="project-card__view">View Project</span>
            </div>
            {redirect && <Navigate to={"/detailproject/" + to.toLowerCase()} />}
        </div>
    );
};

const Works = () => {
    const projects = [
        {
            title: "Spotify Clone",
            subtitle: "Complete Spotify clone with authentication, music player, personalized playlists and responsive interface. Built with React, Django REST API and Redux for state management.",
            to: "spotify",
            img: spotify,
            technologies: ["React", "Django", "Redux", "Python"]
        },
        {
            title: "Live Bike",
            subtitle: "Complete bike rental management system. Includes customer registration, contract control, fleet management, preventive maintenance and management reports. Freelance project with modern interface.",
            to: "livebike",
            img: livebike,
            technologies: ["React", "Django", "PostgreSQL", "JavaScript"]
        },
        {
            title: "Mister Massas",
            subtitle: "Complete desktop system for pizzeria with order control, customer registration, sales reports and thermal printer integration. Developed in Python with intuitive graphical interface.",
            to: "pizzeria",
            img: mistermassas,
            technologies: ["Python"]
        },
        {
            title: "E-Commerce",
            subtitle: "Complete e-commerce platform with product catalog, shopping cart, payment system, user management and admin panel. Responsive interface optimized for SEO.",
            to: "ecommerce",
            img: ecommerce,
            technologies: ["Django", "Python", "Bootstrap", "PostgreSQL"]
        },
        {
            title: "Woguess",
            subtitle: "Word guessing game inspired by Wordle. Interactive interface with visual feedback, scoring system, multiple difficulty levels and responsive design for desktop and mobile.",
            to: "woguess",
            img: woguess,
            technologies: ["HTML", "CSS", "JavaScript"]
        }
    ];

    return (
        <section id="work">
            <h3 className="topic-title" id="work-title">Projects</h3>
            <div id="works-container">
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            subtitle={project.subtitle}
                            to={project.to}
                            img={project.img}
                            technologies={project.technologies}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Works