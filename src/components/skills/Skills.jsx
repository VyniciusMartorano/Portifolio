import React from "react"
import './index.css'
import node from './../../assets/svgs/node.svg'
import python from './../../assets/svgs/python.svg'
import javascript from './../../assets/svgs/javascript.svg'
import typescript from './../../assets/svgs/typescript.svg'
import vue from './../../assets/svgs/vue.svg'
import java from './../../assets/svgs/java.svg'
import react from './../../assets/svgs/react.svg'
import redux from './../../assets/svgs/redux.svg'
import spring from './../../assets/svgs/spring.svg'
import django from './../../assets/svgs/django.svg'
import bootstrap from './../../assets/svgs/bootstrap.svg'
import postgres from './../../assets/svgs/postgres.svg'
import selenium from './../../assets/svgs/selenium.svg'
import sqlserver from './../../assets/svgs/sql-server.svg'
import html from './../../assets/svgs/html.svg'
import css from './../../assets/svgs/css.svg'
import delphi from './../../assets/svgs/delphi.svg'
import git from './../../assets/svgs/git.svg'
import docker from './../../assets/svgs/docker.svg'


const logos = [
    { icon: python, label: 'Python' },
    { icon: node, label: 'Node.js' },
    { icon: javascript, label: 'JavaScript' },
    { icon: java, label: 'Java' },
    { icon: typescript, label: 'TypeScript' },
    { icon: delphi, label: 'Delphi' },
    { icon: sqlserver, label: 'SQL Server' },
    { icon: postgres, label: 'PostgreSQL' },
    { icon: django, label: 'Django' },
    { icon: spring, label: 'Spring' },
    { icon: vue, label: 'Vue.js' },
    { icon: react, label: 'React' },
    { icon: redux, label: 'Redux' },
    { icon: bootstrap, label: 'Bootstrap' },
    { icon: html, label: 'HTML' },
    { icon: css, label: 'CSS' },
    { icon: selenium, label: 'Selenium' },
    { icon: git, label: 'Git' },
    { icon: docker, label: 'Docker' },
]


const Skills = () =>  {


    return (
        <section id="skills">
            <h3  className="topic-title">Skills</h3>

            <div className="container-skills-group">
              {logos.map(
                (logo) => 
                    <div key={logo.label} className="item-skill">
                        <img src={logo.icon} alt={logo.label} title={logo.label} />
                    </div>
                )}
            </div>
        </section>
    )
}

export default Skills