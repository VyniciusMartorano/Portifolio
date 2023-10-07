//SOME
import someImgLogin from '../../assets/slider/some/some.jpeg'

//SPOTIFY
import spotifyImgLogin from '../../assets/slider/spotify/spotifyLogin.jpeg'
import spotifyImgMain from '../../assets/slider/spotify/spotify.jpeg'
import spotifyImgMusics from '../../assets/slider/spotify/musics.png'

//PIZZARIA
import pizzeriaImgMain from '../../assets/slider/pizzeria/pizzeria.jpeg'

//ECOMMERCE
import ecommerceImgMain from '../../assets/slider/ecommerce/main.jpeg'

//WOGUESS
import woguessImgMain from '../../assets/slider/woguess/main.jpeg'


const PROJECTS = {
    some: {
        title: 'Sistema de administração de miniempresas da Juniors Achieviment',
        images: [
            {
                image: someImgLogin,
                description: 'Login Page'
            },
        ]
    },
    spotify: {
        title: 'Clone Full Stack do App Spotify Web',
        images: [
            {
                image: spotifyImgLogin,
                description: 'Login Page'
            },
            {
                image: spotifyImgMain,
                description: 'Main Page'
            },
            {
                image: spotifyImgMusics,
                description: 'Músicas'
            },
        ]
    },
    pizzeria: {
        title: 'Desktop Pizzeria System',
        images: [
            {
                image: pizzeriaImgMain,
                description: 'Main Page'
            },
        ]
    },
    ecommerce: {
        title: 'E-commerce Django',
        images: [
            {
                image: ecommerceImgMain,
                description: 'Main Page'
            },
        ]
    },
    woguess: {
        title: 'Woguess Game',
        images: [
            {
                image: woguessImgMain,
                description: 'Main Page'
            },
        ]
    },

}


export default PROJECTS