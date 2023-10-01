//SOME
import someImgLogin from '../../assets/slider/some/some.jpeg'

//SPOTIFY
import spotifyImgLogin from '../../assets/slider/spotify/spotifyLogin.jpeg'
import spotifyImgMain from '../../assets/slider/spotify/spotify.jpeg'


const PROJECTS = {
    some: {
        title: 'Sistema de administração de miniempresas da Juniors Achieviment',
        images: [
            {
                image: someImgLogin,
                description: 'Tela de login'
            },
        ]
    },
    spotify: {
        title: 'Clone Full Stack do App Spotify Web',
        images: [
            {
                image: spotifyImgLogin,
                description: 'Tela de login'
            },
            {
                image: spotifyImgMain,
                description: 'Tela Principal'
            },
        ]
    },

}


export default PROJECTS