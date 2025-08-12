import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StylesGallery } from "./Styles";

function GalleryNasa() {
  const [imagesGallery, setImagesGallery] = useState([]);
  const navigate = useNavigate();

  const back = () => {
    navigate("/app-nasa");
  };

  async function fetchImages() {
    try {
      const response = await fetch(
        "https://images-api.nasa.gov/search?q=galaxy&media_type=image"
      );
      const data = await response.json();
      const items = data.collection.items;

      const urls = items
        .map((item) => (item.links && item.links[0] ? item.links[0].href : null))
        .filter(Boolean);

      setImagesGallery(urls);
    } catch (error) {
      console.error("Erro ao buscar imagens da NASA:", error);
    }
  }

  useEffect(() => {
    fetchImages();
  }, []);

return (
  <StylesGallery>
    {imagesGallery.length === 0 ? (
      <p className="loading-text">Carregando imagens...</p>
    ) : (
      <>
        <h1>Galeria Espacial</h1>
        <div className="gallery-container">
          {imagesGallery.map((url, index) => (
            <img key={index} src={url} alt={`Imagem espacial ${index + 1}`} />
          ))}
        </div>
        <button onClick={back}>Voltar</button>
      </>
    )}
  </StylesGallery>
);

}

export default GalleryNasa;
