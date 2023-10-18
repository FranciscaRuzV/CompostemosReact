import "./Comunidad.css";
import axios from "axios";
import { useEffect, useState } from "react";
import UserIcon from "../component/utilidades/UserIcon";

export default function Comunidad() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/post/lista/PorFecha",
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
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
              <img src="" alt="" />
              {/* avatar de la persona */}
              <div>
                <p>Carlos Sainz</p> {/* usename de la persona */}
                {/* quitar y ademas quitar .user-profile small en comunidad.css */}
              </div>
            </div>
            <div className="post-input-container">
              <textarea
                rows="3"
                placeholder="Que estas pensando, Carlos?"
              ></textarea>
              <div className="add-post-links">
                {/* si desea agregar foto, emoji
                <a href="#">
                  <img src="" alt="" />
                  Foto/video
                </a>
                <a href="#">
                  <img src="" alt="" />
                  Emoji
                </a>
               */}
              </div>
            </div>
          </div>
          {data.length && (
            <div className="post-container">
              {data.map((item) => (
                <div key={item.postId}>
                  <div className="post-row">
                    <div className="user-profile">
                      <UserIcon nombre={item.usuarioNombre} />
                      {/* avatar de la persona */}
                      <div>
                        <p>{item.postTitulo}</p>
                        {/* username de la persona */}
                        <span>{item.createdAt}</span>
                        {/* fecha de publicación */}
                      </div>
                    </div>
                    <a href="#"></a>
                    {/* editar publicación */}
                  </div>
                  <p className="post-text">{item.postTexto}</p>
                </div>
              ))}
              {/* contenido del post */}
              <img src="" className="post-img" alt="Post Image" />
              {/* si es que el post lleva imagen */}
              <div className="post-row">
                <div className="activity-icons">
                  <div>
                    <i className="fa-solid fa-heart"></i>20
                  </div>
                  {/* me gusta */}
                  <div>
                    <i className="fa-regular fa-comment"></i>4
                  </div>
                  {/* comentarios */}
                </div>
                {/* <div className="post-profile-icon">
                <img src="" alt="Post Profile Icon" />
              </div>  comentarios */}
              </div>
            </div>
          )}
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
            <div className="right-evento">
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
