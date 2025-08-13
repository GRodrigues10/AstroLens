import { useState, useEffect } from "react";
import { StylesApodNasa } from "./Styles";
import { useNavigate } from "react-router-dom";

function ApodNasa() {
  const APIKEY = "QH7sKVDhwKAMTjEYAh8UdhjeAfN78CDplRi9Savj";
  const [apodData, setApodData] = useState(null);
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`
        );
        const data = await response.json();
        setApodData(data);
      } catch (error) {
        console.error("Erro ao buscar APOD:", error);
      }
    };
    fetchApod();
  }, []);

  const back = () => {
    navigate("/app-nasa");
  };

  // Enquanto os dados não chegarem, mostra Carregando
  if (!apodData) {
    return (
      <StylesApodNasa>
        <div className="loading">
          <p>Carregando dados...</p>
        </div>
      </StylesApodNasa>
    );
  }

  return (
    <StylesApodNasa>
      <h2>Imagem Astronômica do Dia:</h2>
      <div className="apod-content">
        <h3>{apodData.title}</h3>

        {apodData.media_type === "image" ? (
          <>
            {!isContentLoaded && <p>Carregando imagem...</p>}
            <img
              src={apodData.url}
              alt={apodData.title}
              onLoad={() => setIsContentLoaded(true)}
              style={{ display: isContentLoaded ? "block" : "none" }}
            />
          </>
        ) : (
          <iframe
            title="APOD Video"
            src={apodData.url}
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen
            width="100%"
            height="400px"
            onLoad={() => setIsContentLoaded(true)}
          />
        )}

        {isContentLoaded && (
          <>
            <p>{apodData.explanation}</p>
            <p>
              <small>{apodData.date}</small>
            </p>
          </>
        )}
      </div>

      <button onClick={back}>Voltar</button>
    </StylesApodNasa>
  );
}

export default ApodNasa;
