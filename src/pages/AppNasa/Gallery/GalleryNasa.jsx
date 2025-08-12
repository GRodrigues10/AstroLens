import React from "react";
import img1 from "../../../assets/img-teste.jpg";
import img2 from "../../../assets/img-teste1.jpg";
import img3 from "../../../assets/img-teste2.jpg";
import img4 from "../../../assets/img-teste3.jpg";
import img5 from "../../../assets/img-teste4.jpg";
import img6 from "../../../assets/img-teste5.jpg";
import img7 from "../../../assets/img-teste7.jpg";
import img8 from "../../../assets/img-teste8.jpg";
import { useNavigate } from "react-router-dom";
import { StylesGallery } from "./Styles";

function GalleryNasa() {
  const navigate = useNavigate();
  const back = () => {
    navigate("/app-nasa");
  };

  return (
    <StylesGallery>
      <h1>Galeria Espacial</h1>
      <div className="gallery-container">
        <img src={img1} alt="Imagem 1" />
        <img src={img2} alt="Imagem 2" />
        <img src={img3} alt="Imagem 3" />
        <img src={img4} alt="Imagem 4" />
        <img src={img5} alt="Imagem 5" />
        <img src={img6} alt="Imagem 6" />
        <img src={img7} alt="Imagem 7" />
        <img src={img8} alt="Imagem 8" />
      </div>
      <button onClick={back}>Voltar</button>
    </StylesGallery>
  );
}

export default GalleryNasa;
