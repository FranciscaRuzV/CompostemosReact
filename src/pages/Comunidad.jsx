import React from "react";
import "./Comunidad.css";

export default function Comunidad() {
  return (
    <>
      <nav>
        <div className="nav-left">
          <img src="" className="logo" alt="Logo" />
        </div>
        <div className="nav-right">
          <div className="busqueda">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" />
          </div>
          <div className="nav-user-icon online">
            <img src="" alt="User Icon" />
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="left-sidebar">
          <div className="imp-links">
            <a href="#">
              <i className="fa-solid fa-map"></i>Mapa
            </a>
            <a href="#">
              <i className="fa-solid fa-circle-info"></i>Foro informativo
            </a>
            <a href="#">
              <i className="fa-solid fa-user-group"></i>Amigos
            </a>
            <a href="#">Mostrar Más</a>
          </div>
        </div>
        <div className="main-content">
          <div className="escribir-post-container">
            <div className="user-profile">
              <img src="" alt="User Profile" />
              <div>
                <p>Carlos Sainz</p>
                <small>Publico</small>
              </div>
            </div>
            <div className="post-input-container">
              <textarea
                rows="3"
                placeholder="Que estas pensando, Carlos?"
              ></textarea>
              <div className="add-post-links">
                <a href="#">
                  <img src="" alt="" />
                  Foto/video
                </a>
                <a href="#">
                  <img src="" alt="" />
                  Emoji
                </a>
              </div>
            </div>
          </div>
          <div className="post-container">
            <div className="post-row">
              <div className="user-profile">
                <img src="" alt="User Profile" />
                <div>
                  <p>Carlos Sainz</p>
                  <span>Mes Dia Año, Hora</span>
                </div>
              </div>
              <a href="#"></a>
            </div>
            <p className="post-text">
              Muy buena esta página web, muy recomendable para todos los que
              empiezan en el compost
            </p>
            <img src="" className="post-img" alt="Post Image" />
            <div className="post-row">
              <div className="activity-icons">
                <div>
                  <i className="fa-solid fa-heart"></i>20
                </div>
                <div>
                  <i className="fa-regular fa-comment"></i>4
                </div>
              </div>
              <div className="post-profile-icon">
                <img src="" alt="Post Profile Icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="right-sidebar">
          <div className="sidebar-title">
            <h4>Eventos</h4>
            <a href="#">Ver todo</a>
          </div>
          <div className="evento">
            <div className="left-evento">
              <h3>6</h3>
              <span>Diciembre</span>
            </div>
            <div className="left-evento">
              <h4>Lanzamiento</h4>
              <p>Generation</p>
              <a href="#">Más información</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
