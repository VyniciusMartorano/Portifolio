import "./style.css";
import PROJECTS from "./projects";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Image } from "primereact/image";

const DetailProject = () => {
  const params = useParams();
  const [currentProject, setCurrentProject] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const projectName = params.nameproject?.toLowerCase();
    if (projectName && PROJECTS[projectName]) {
      setCurrentProject(PROJECTS[projectName]);
    }
    setLoading(false);
  }, [params.nameproject]);

  // Se não encontrar o projeto, redireciona para home
  if (!loading && !currentProject) {
    return <Navigate to="/" />;
  }

  if (loading) {
    return (
      <div id="content-detail-project">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Carregando projeto...</p>
        </div>
      </div>
    );
  }

  return (
    <div id="content-detail-project">
      <div id="header-detail-projects" className="mt-3">
        <div id="return-router-container" onClick={() => setRedirect(true)}>
          <i id="icon-return" className="fas fa-solid fa-arrow-left"></i>
          <span>Voltar</span>
        </div>
      </div>

      <h1 className="title-detail-project not-select">
        {params.nameproject?.charAt(0).toUpperCase() + params.nameproject?.slice(1)}
      </h1>

      {currentProject.title && (
        <h2 className="subtitle-detail-project not-select">
          {currentProject.title}
        </h2>
      )}

      {currentProject.description && (
        <div className="description-project">
          {currentProject.description.split('\n').map((line, index) => (
            <p key={index} className="description-line">
              {line.trim()}
            </p>
          ))}
        </div>
      )}

      {currentProject.availableIn && (
        <div className="project-links">
          <p>
            Disponível em:
          </p>
          <div className="links-container">
            {currentProject.availableIn.split(' ').map((link, index) => {
              if (link.includes('http')) {
                return (
                  <div key={index} className="link-item">
                    <a
                      className="available-link"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link}
                    </a>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}

      {currentProject.images && currentProject.images.length > 0 && (
        <div id="container-mobile">
          {currentProject.images.map((item, index) => (
            <div
              key={index}
              className="border-1 w-12 surface-border border-round m-2 text-center py-5 px-3"
            >
              <div className="mb-3 w-12">
                {item.image && (
                  <Image
                    preview
                    height="400"
                    src={item.image}
                    alt="image"
                    className="w-12 shadow-2"
                  />
                )}
                {item.video && (
                  <video
                    controls
                    width="100%"
                    height="400"
                    className="w-12 shadow-2 rounded"
                    style={{ objectFit: 'cover' }}
                  >
                    <source src={item.video} type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                )}
              </div>
              <div>
                <h4 className="mb-1">{item.description}</h4>
              </div>
            </div>
          ))}
        </div>
      )}

      {redirect && <Navigate to="/" />}
    </div>
  );
};

export default DetailProject;
