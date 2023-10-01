import React from "react"
import './style.css'
import spotify from './../../../assets/projects/spotify/spotifyLogin.jpeg'
import some from './../../../assets/projects/some/some.jpeg'
import mistermassas from './../../../assets/projects/mistermassas/mistermassas.jpeg'
import ecommerce from './../../../assets/projects/ecommerce/ecommerce.jpeg'
import woguess from './../../../assets/projects/woguess/woguess.jpeg'
import Item from "../Item"



const Carousel = (props) => {
    return (
        <section className="carousel">
            <div className="carousel__container">
                <Item 
                    title={'Spotify'} 
                    subtitle={'A Full Stack App of Spotify'} 
                    to={'spotify'}
                    key={1} 
                    img={spotify} 
                />
                <Item 
                    title={'SOME'} 
                    subtitle={'Manager System for Small Companys of JA'} 
                    to={'some'} 
                    key={2} 
                    img={some} 
                />
                <Item 
                    title={'Mister Massas'} 
                    subtitle={'System to Pizzeria Desktop'} 
                    to={'pizzeria'} 
                    key={3} 
                    img={mistermassas} 
                />
                <Item 
                    title={'E-Commerce'} 
                    subtitle={'Ecommerce django'} 
                    to={'ecommerce'} 
                    key={4} 
                    img={ecommerce} 
                />
                <Item 
                    title={'Woguess'} 
                    subtitle={'Word Guessing Game'} 
                    to={'woguess'} 
                    key={5} 
                    img={woguess}
                />
            </div>
        </section>
    )
}

export default Carousel