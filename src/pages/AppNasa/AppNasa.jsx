import React, { useState, useEffect } from "react";
import { StylesAppNasa } from "./Styles";
import earthImg from "../../assets/earth.png";
import marsImg from "../../assets/mars.png";
import netunoImg from "../../assets/netuno.png";
import jupiterImg from "../../assets/jupiter.png";
import uranoImg from "../../assets/urano.png";
import saturnoImg from "../../assets/saturno2.png";
import mercurioImg from "../../assets/mercurio.png";
import venusImg from "../../assets/venus.png";
import imgUnknown from "../../assets/unknown.png";
import plutaoImg from "../../assets/plutao.png";
import img1 from "../../assets/img-teste.jpg";
import img2 from "../../assets/img-teste1.jpg";
import img3 from "../../assets/img-teste2.jpg";
import img4 from "../../assets/img-teste3.jpg";
import img5 from "../../assets/img-teste4.jpg";
import img6 from "../../assets/img-teste5.jpg";
import img7 from "../../assets/img-teste7.jpg";
import img8 from "../../assets/img-teste8.jpg";
import img9 from "../../assets/img-teste9.jpg";
import planetData from "../../../planets.json";

import { useNavigate } from "react-router-dom";

function AppNasa() {
  const APIKEY = import.meta.env.VITE_APIKEY;
  const [activeTab, setActiveTab] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [imageUrl, setImageUrl] = useState(earthImg);
  const [apodData, setApodData] = useState(null);
  const [cme, setCme] = useState("");
  const [speed, setSpeed] = useState(null);
  const [flareSolar, setFlareSolar] = useState("");
  const [geomagneticStormLinks, setGeomagneticStormLinks] = useState([]);

  const planetsImgs = {
    earth: earthImg,
    mars: marsImg,
    neptune: netunoImg,
    jupiter: jupiterImg,
    uranus: uranoImg,
    saturn: saturnoImg,
    mercury: mercurioImg,
    venus: venusImg,
    pluto: plutaoImg,
  };

  const tabs = [
    { id: "planetas", label: "Planetas e Exoplanetas" },
    { id: "galeria", label: "Galeria Espacial" },
    { id: "apod", label: "APOD" },
    { id: "previsao", label: "Previsão Espacial" },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    // Buscar Terra no JSON local
    const earth = planetData.find((p) => p.id === "earth");
    setData(earth);
    setSearch("Earth");
    setActiveTab("planetas");
  }, []);

  function handleTabClick(id) {
    setActiveTab(id);
    setMenuOpen(false);
  }

  function exit() {
    localStorage.removeItem("usuarioLogado");
    alert("Você saiu com sucesso!");
    navigate("/");
  }

  const nomePTtoID = {
    terra: "earth",
    marte: "mars",
    jupiter: "jupiter",
    saturno: "saturn",
    venus: "venus",
    mercurio: "mercury",
    netuno: "neptune",
    urano: "uranus",
    plutão: "pluto",
  };

  function apiData() {
    const nomeBusca = search.trim().toLowerCase();
    if (!nomeBusca) return;

    const idAPI = nomePTtoID[nomeBusca] || nomeBusca;
    const planet = planetData.find((p) => p.id === idAPI);

    if (planet) {
      setData(planet);
      setImageUrl(planetsImgs[planet.id] || imgUnknown);
      setActiveTab("planetas");
    } else {
      setData(null);
      setImageUrl(imgUnknown);
      console.warn("Planeta não encontrado");
    }
  }

  // Preparar dados das luas com segurança
  const luas = data?.moons || [];

  const seeMore = () => {
    navigate("/gallery-nasa");
  };

  const apod = async () => {
    const dataApod = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`
    );
    const response = await dataApod.json();
    setApodData(response);
  };

  const formatISODate = (isoString) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  const getFormattedDate = (date) => {
    return date.toISOString().split("T")[0]; // yyyy-MM-dd
  };

  const temp = async () => {
    try {
      const hoje = new Date();
      const seteDiasAtras = new Date();
      seteDiasAtras.setDate(hoje.getDate() - 7);

      const url = `https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/CME?startDate=${getFormattedDate(
        seteDiasAtras
      )}&endDate=${getFormattedDate(hoje)}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.length > 0) {
        setCme(formatISODate(data[0].startTime));
        if (data[1] && data[1].cmeAnalyses && data[1].cmeAnalyses[0]) {
          setSpeed(data[1].cmeAnalyses[0].speed);
        } else if (data[0].cmeAnalyses && data[0].cmeAnalyses[0]) {
          setSpeed(data[0].cmeAnalyses[0].speed);
        } else {
          setSpeed(null);
        }
      } else {
        setCme("Nenhum CME recente");
        setSpeed(null);
      }
    } catch (error) {
      console.error("Erro ao buscar CME:", error);
      setCme("Erro ao carregar CME");
      setSpeed(null);
    }
  };

  const fetchSolarFlares = async () => {
    try {
      const hoje = new Date();
      const seteDiasAtras = new Date();
      seteDiasAtras.setDate(hoje.getDate() - 7);

      const url = `https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/FLR?startDate=${getFormattedDate(
        seteDiasAtras
      )}&endDate=${getFormattedDate(hoje)}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Erro ao buscar dados de flare solar");
      }
      const data = await response.json();

      console.log("Dados de flare solar:", data);
      setFlareSolar(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchGeomagneticStorms = async () => {
    try {
      const hoje = new Date();
      const seteDiasAtras = new Date();
      seteDiasAtras.setDate(hoje.getDate() - 7);

      const url = `https://kauai.ccmc.gsfc.nasa.gov/DONKI/WS/get/GST?startDate=${getFormattedDate(
        seteDiasAtras
      )}&endDate=${getFormattedDate(hoje)}`;

      const response = await fetch(url);
      if (!response.ok)
        throw new Error("Erro ao buscar tempestades geomagnéticas");

      const data = await response.json();

      if (
        data.length > 0 &&
        data[0].sentNotifications &&
        data[0].sentNotifications.length > 0
      ) {
        // Pega o último alerta (mais recente)
        const lastNotification = data[0].sentNotifications.slice(-1)[0];
        setGeomagneticStormLinks([lastNotification]); // só um link
      } else {
        setGeomagneticStormLinks([]);
      }
    } catch (error) {
      console.error(error);
      setGeomagneticStormLinks([]);
    }
  };

  //  const maxLength = 130;
  // const shortExplanation =
  //   apodData && apodData.explanation
  //     ? apodData.explanation.length > maxLength
  //       ? apodData.explanation.slice(0, maxLength) + "..."
  //       : apodData.explanation
  //     : "";

  const seeMoreApod = () => {
    navigate("/apod-nasa");
  };

  useEffect(() => {
    apod();
    temp();
    fetchSolarFlares();
    fetchGeomagneticStorms();
  }, []);

  return (
    <StylesAppNasa>
      <h1>NASA Space Explorer</h1>

      <div className="content">
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        {menuOpen && (
          <nav className="menu-hamburger mobile-menu">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`aba-item ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </div>
            ))}
          </nav>
        )}

        <nav className="menu-desktop">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`aba-item ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </nav>

        {/* Conteúdo dinâmico das abas */}
        {activeTab === "planetas" && (
          <div className="tab-content data-text">
            <h2>Pesquise o Planeta:</h2>
            <div className="input">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button onClick={apiData}>Buscar</button>
            </div>

            {data ? (
              <div className="planetary-data">
                <h2>Dados do Planeta</h2>

                <div className="row">
                  <span className="label">
                    <strong>Nome: </strong>
                  </span>
                  <span className="value">{data.englishName}</span>
                </div>

                <div className="row">
                  <span className="label">
                    <strong>{luas.length === 1 ? "Lua: " : "Luas: "}</strong>
                  </span>
                  <span className="value">
                    {luas.length > 0
                      ? luas
                          .slice(0, 5)
                          .map((moon) => moon.moon)
                          .join(", ") + (luas.length > 5 ? " ..." : "")
                      : "Sem luas"}
                  </span>
                </div>

                <div className="row">
                  <span className="label">
                    <strong>Temperatura: </strong>
                  </span>
                  <span className="value">
                    {data.avgTemp !== undefined
                      ? `${(data.avgTemp - 273.15).toFixed(1)} °C`
                      : "N/D"}
                  </span>
                </div>

                <button className="exit" onClick={exit}>
                  Sair
                </button>
              </div>
            ) : (
              <p className="data-not-found">
                Nenhum dado para mostrar. Faça uma busca.
              </p>
            )}

            <div className="img">
              <img
                src={imageUrl}
                alt={`Imagem do planeta ${data?.englishName || ""}`}
              />
            </div>
          </div>
        )}

        {activeTab === "galeria" && (
          <div className="tab-content2">
            <h2>Galeria Espacial</h2>

            <div className="gallery">
              <img src={img1} alt="Imagem 1" />
              <img src={img2} alt="Imagem 2" />
              <img src={img3} alt="Imagem 3" className="img3" />
              <img src={img4} alt="Imagem 4" className="img4" />
              <img src={img5} alt="Imagem 5" className="img5" />
              <img src={img6} alt="Imagem 6" className="img6" />
              <img src={img7} alt="Imagem 7" className="img7" />
              <img src={img8} alt="Imagem 8" className="img8" />
              <img src={img9} alt="Imagem 9" className="img9" />
            </div>
            <button className="button-gallery" onClick={seeMore}>
              Ver mais
            </button>
          </div>
        )}

        {activeTab === "apod" && (
          <div className="tab-content3">
            <h2>Imagem Astronômica do Dia:</h2>
            {apodData ? (
              <div className="apod-content">
                <h3>{apodData.title}</h3>
                {apodData.media_type === "image" ? (
                  <img src={apodData.url} alt={apodData.title} />
                ) : apodData.media_type === "video" ? (
                  <iframe
                    title="APOD Video"
                    src={apodData.url}
                    frameBorder="0"
                    allow="encrypted-media"
                    allowFullScreen
                    width="100%"
                    height="400px"
                  />
                ) : null}
                {/* <p>{shortExplanation}</p> */}
                {/* <p>
                  <small>{apodData.date}</small>
                </p> */}
                <button onClick={seeMoreApod}>Ver Explicação</button>
              </div>
            ) : (
              <p>Carregando APOD...</p>
            )}
          </div>
        )}

        {activeTab === "previsao" && (
          <div className="tab-content4">
            <h2>Previsão Espacial</h2>
            <div className="cme">
              <p>
                <strong>Último CME observado</strong>
              </p>
              <p>{cme}</p>
            </div>

            <div className="velocidade">
              <p>
                <strong>Velocidade do CME</strong>
              </p>
              <p>{speed ? `${speed.toFixed(0)} km/s` : "N/D"}</p>
            </div>

            <div className="flare-solar">
              <p>
                <strong>Último flare solar</strong>
              </p>
              <p>
                {flareSolar.length > 0
                  ? formatISODate(flareSolar[0].beginTime)
                  : "Nenhum flare recente"}
              </p>
            </div>

            <div className="tempestade">
              <p>
                <strong>Tempestade geomagnética</strong>
              </p>
              {geomagneticStormLinks.length > 0 ? (
                <p>
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href={geomagneticStormLinks[0].messageURL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver alerta {geomagneticStormLinks[0].messageID}
                  </a>
                </p>
              ) : (
                <p>Nenhum alerta disponível</p>
              )}
            </div>
          </div>
        )}
      </div>
    </StylesAppNasa>
  );
}

export default AppNasa;
