import React, { useState } from "react"
import { Navigate } from "react-router"

const Item = ({ img, title, subtitle, to }) => {
    const [redirect, setRedirect] = useState(false)
    return (
        <div 
            className="carousel-item" 
            onClick={() => setRedirect(true)}
        >
            <img
                className="carousel-item__img"
                src={img}
                alt={title}
            />
            <div className="carousel-item__details">
                <h5 className="carousel-item__details--title">{title}</h5>
                <p className="carousel-item__details--subtitle">{subtitle}</p>
            </div>
            {redirect && <Navigate to={'/detailproject/' + to.toLowerCase()} />}
        </div>
    )
}

export default Item