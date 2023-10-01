import './style.css'
import PROJECTS from "./projects"
import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { Carousel } from 'primereact/carousel';
import { Image } from 'primereact/image';



const DetailProject = (props) => {
    const params = useParams()
    const [currentProject, setCurrentProject] = useState({images: []})
    const [redirect, setRedirect] = useState(false)
  
    const productTemplate = (item) => {
        return (
            <div className="border-1 w-12 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3 w-12">
                    {item.image && (<Image preview height="400" src={item.image} alt='image' className="w-12 shadow-2" />)}
                </div>
                <div>
                    <h4 className="mb-1">{item.description}</h4>
                </div>
            </div>
        )
    }


    useEffect(() => {
        setCurrentProject(PROJECTS[params.nameproject])
    }, [])

    return (
        <div id="content-detail-project">
            <div id="header-detail-projects">
                <div id="return-router-container" onClick={() => setRedirect(true)}>
                    <i id="icon-return" className="fas fa-solid fa-arrow-left"></i>
                </div>

            </div>
            <h1 className="title-detail-project not-select">{ params.nameproject }</h1>
            <h2 className="subtitle-detail-project not-select">{ currentProject.title }</h2>
            <Carousel 
                value={currentProject.images} 
                numVisible={1} 
                id="carousel"
                className="custom-carousel" 
                circular
                autoplayInterval={7000} 
                itemTemplate={productTemplate} 
            />
            <div id="container-mobile">
                {currentProject.images.map(
                    item => 
                    <div className="border-1 w-12 surface-border border-round m-2 text-center py-5 px-3">
                        <div className="mb-3 w-12">
                            {item.image && (
                                <Image 
                                    preview 
                                    height="150" 
                                    src={item.image} 
                                    alt='image' 
                                    className="w-12 shadow-2" 
                                />)}
                        </div>
                        <div>
                            <h4 className="mb-1">{item.description}</h4>
                        </div>
                    </div>
                )}
            </div>

            {redirect && (<Navigate to={'/'} />)}
        </div>
    )
}

export default DetailProject