import React from "react"
import './style.css'

const Education = () => {
    const educationData = [
        {
            institution: "IFRN",
            course: "ANALYSIS AND SYSTEMS DEVELOPMENT",
            type: "BACHELOR",
            status: "in-progress",
            icon: "fa-spinner"
        },
        {
            institution: "UFRN",
            course: "INFORMATICS FOR INTERNET",
            type: "TECHNICAL",
            status: "completed",
            icon: "fa-check"
        },
        {
            institution: "UDEMY",
            course: "Modern Web Course with JavaScript 2022 + Projects",
            type: "CERTIFICATION",
            status: "completed",
            icon: "fa-check"
        },
        {
            institution: "UDEMY",
            course: "BASIC TO ADVANCED PYTHON 3 COURSE (WITH REAL PROJECTS)",
            type: "CERTIFICATION",
            status: "completed",
            icon: "fa-check"
        },
        {
            institution: "CURSO EM VIDEO",
            course: "PYTHON 3",
            type: "CERTIFICATION",
            status: "completed",
            icon: "fa-check"
        },
        {
            institution: "CURSO EM VIDEO",
            course: "HTML5 E CSS3 COURSE: MODULE 1 OF 5",
            type: "CERTIFICATION",
            status: "completed",
            icon: "fa-check"
        }
    ];

    const getStatusIcon = (status, icon) => {
        const iconClass = `fa-solid ${icon}`;
        const iconStyle = status === 'completed'
            ? { color: '#4CAF50' }
            : { color: '#FF9800' };

        return <i className={iconClass} style={iconStyle}></i>;
    };

    return (
        <div id="education">
            <h4 className="subtitles-about">
                2.0 <i className="fas fa-solid fa-book"></i> Education
            </h4>

            <div className="education-grid">
                {educationData.map((item, index) => (
                    <div key={index} className="education-card">
                        <div className="education-header">
                            <div className="institution">
                                <span className="institution-name">{item.institution}</span>
                            </div>
                            <div className="status-icon">
                                {getStatusIcon(item.status, item.icon)}
                            </div>
                        </div>

                        <div className="education-content">
                            <h5 className="course-name">{item.course}</h5>
                            <span className="course-type">{item.type}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education