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
import ecommerceImgCart from '../../assets/slider/ecommerce/carrinho.png'
import ecommerceImgProductDetail from '../../assets/slider/ecommerce/product_detail.png'

//WOGUESS
import woguessImgMain from '../../assets/slider/woguess/main.jpeg'
import woguessImgGame from '../../assets/slider/woguess/game.png'


const PROJECTS = {
    some: {
        title: 'Junior Achievement Mini-Enterprise Management System.',
        description: 'System created to update and migrate the routines of Mini Enterprises to software with greater ease of manipulation by employees.',
        images: [
            {
                image: someImgLogin,
                description: 'Login Page'
            },
        ]
    },
    spotify: {
        title: 'A Full Stack App of Spotify Web',
        description: 'The application was built in Python on the backend using Django Rest Framework and React JS on the frontend, using Redux for global state management.',
        availableIn: 'https://github.com/VyniciusMartorano/Spotify02-Front  https://github.com/VyniciusMartorano/Spotify02-Back',
        // availableIn2: 'https://github.com/VyniciusMartorano/Spotify02-Back',
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
                description: 'Musics'
            },
        ]
    },
    pizzeria: {
        title: 'Desktop Pizzeria System',
        description: 'System for a local pizzeria built to be used in the service seeking to speed up the order creation process, generating the order and the pdf of the order by printing it in sequence. This system was built entirely with Python using the PyQt5 graphical interface module.',
        images: [
            {
                image: pizzeriaImgMain,
                description: 'Main Page'
            },
        ]
    },
    ecommerce: {
        title: 'E-commerce Django',
        description: 'Built to test knowledge, it has all the features of a conventional e-commerce, just missing the payment option that would be included if the project were put on the air',
        images: [
            {
                image: ecommerceImgMain,
                description: 'Main Page'
            },
            {
                image: ecommerceImgProductDetail,
                description: 'Product Detail'
            },
            {
                image: ecommerceImgCart,
                description: 'Cart'
            },
        ]
    },
    woguess: {
        title: 'Woguess Game',
        description: `Woguess is a game built from Html, Css and Javascript, made because it aims to get a five-letter word right in six tries.`,
        availableIn: 'https://worddle-br.netlify.app/',
        images: [
            {
                image: woguessImgMain,
                description: 'Main Page'
            },
            {
                image: woguessImgGame,
                description: 'Game In Progress'
            },
        ]
    },

}


export default PROJECTS