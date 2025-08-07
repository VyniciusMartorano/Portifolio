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
                <span className="project-card__view">Ver Projeto</span>
            </div>
            {redirect && <Navigate to={"/detailproject/" + to.toLowerCase()} />}
        </div>
    );
};

const Works = () => {
    const projects = [
        {
            title: "Spotify Clone",
            subtitle: "Clone completo do Spotify com autenticação, player de música, playlists personalizadas e interface responsiva. Desenvolvido com React, Django REST API e Redux para gerenciamento de estado.",
            to: "spotify",
            img: spotify,
            technologies: ["React", "Django", "Redux", "Python"]
        },
        {
            title: "Live Bike",
            subtitle: "Sistema completo de gestão para aluguel de bicicletas. Inclui cadastro de clientes, controle de contratos, gestão de frota, manutenção preventiva e relatórios gerenciais. Projeto freelance com interface moderna.",
            to: "livebike",
            img: livebike,
            technologies: ["React", "Django", "PostgreSQL", "JavaScript"]
        },
        {
            title: "Mister Massas",
            subtitle: "Sistema desktop completo para pizzaria com controle de pedidos, cadastro de clientes, relatórios de vendas e integração com impressora térmica. Desenvolvido em Python com interface gráfica intuitiva.",
            to: "pizzeria",
            img: mistermassas,
            technologies: ["Python"]
        },
        {
            title: "E-Commerce",
            subtitle: "Plataforma de e-commerce completa com catálogo de produtos, carrinho de compras, sistema de pagamento, gestão de usuários e painel administrativo. Interface responsiva e otimizada para SEO.",
            to: "ecommerce",
            img: ecommerce,
            technologies: ["Django", "Python", "Bootstrap", "PostgreSQL"]
        },
        {
            title: "Woguess",
            subtitle: "Jogo de adivinhação de palavras inspirado no Wordle. Interface interativa com feedback visual, sistema de pontuação, múltiplos níveis de dificuldade e design responsivo para desktop e mobile.",
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