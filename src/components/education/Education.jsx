import React from "react"
import './style.css'

const Education = () => {


    return (
        <div id="education">
            <h4 className="subtitles-about">
                1.0 <i className="fas fa-solid fa-book"></i> Education
            </h4>
            <ul style={{marginTop: '1rem'}}>
                <li className="item-education"><b>IFRN</b> - ANALYSIS AND SYSTEMS DEVELOPMENT (HIGHER) <i style={{color: 'black'}} className="fa-solid fa-spinner" ></i></li>
                <li className="item-education"><b>UFRN</b> - INFORMATICS FOR INTERNET (TECHNICAL) <i className="fa-solid fa-check" style={{color: 'green'}} ></i></li>
                <li className="item-education"><b>UDEMY</b> - Modern Web Course with JavaScript 2022 + Projects <i className="fa-solid fa-check" style={{color: 'green'}} ></i></li>
                <li className="item-education"><b>UDEMY</b> - BASIC TO ADVANCED PYTHON 3 COURSE (WITH REAL PROJECTS) <i className="fa-solid fa-check" style={{color: 'green'}} ></i></li>
                <li className="item-education"><b>CURSO EM VIDEO</b> - PYTHON 3 [120H] <i className="fa-solid fa-check" style={{color: 'green'}} ></i></li>
                <li className="item-education"><b>CURSO EM VIDEO</b> - HTML5 E CSS3 COURSE: MODULE 1 OF 5 [40 HOURS] <i className="fa-solid fa-check" style={{color: 'green'}} ></i></li>
            </ul>
            
            <h4 style={{marginTop: '30px'}} className="subtitles-about">
                1.1 <i className="fas fa-solid fa-user"></i> Resume
            </h4>

        </div>
    )
}
export default Education