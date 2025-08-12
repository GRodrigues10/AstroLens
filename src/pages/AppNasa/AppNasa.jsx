import React, { useState, useEffect } from "react";
import { StylesAppNasa } from "./Styles";
import earthImg from "../../assets/earth.png";
import marsImg from '../../assets/mars.png';
import netunoImg from '../../assets/netuno.png';
import jupiterImg from '../../assets/jupiter.png';
import uranoImg from '../../assets/urano.png';
import saturnoImg from '../../assets/saturno2.png';
import mercurioImg from '../../assets/mercurio.png';
import venusImg from '../../assets/venus.png';
import plutaoImg from '../../assets/plutao.png';
import img1 from '../../assets/img-teste.jpg'
import img2 from '../../assets/img-teste1.jpg'
import img3 from '../../assets/img-teste2.jpg'
import img4 from '../../assets/img-teste3.jpg'
import img5 from '../../assets/img-teste4.jpg'
import img6 from '../../assets/img-teste5.jpg'
import img7 from '../../assets/img-teste7.jpg'
import img8 from '../../assets/img-teste8.jpg'
import img9 from '../../assets/img-teste9.jpg'

import { useNavigate } from "react-router-dom";

function AppNasa() {
  const [activeTab, setActiveTab] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [imageUrl, setImageUrl] = useState(earthImg);

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
    // Buscar Terra ao montar o componente
    async function fetchEarth() {
      try {
        const url = `https://api.le-systeme-solaire.net/rest/bodies/earth`;
        const response = await fetch(url);
        if (response.ok) {
          const result = await response.json();
          setData(result);
          setSearch("Earth");
          setActiveTab("planetas");
        }
      } catch (error) {
        console.error("Erro ao buscar Terra:", error);
      }
    }
    fetchEarth();
  }, []);

  function handleTabClick(id) {
    setActiveTab(id);
    setMenuOpen(false);
  }

  function exit() {
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


  async function apiData() {
    try {
      const nomeBusca = search.trim().toLowerCase();

      if (!nomeBusca) {
        console.warn("Digite o nome de um planeta para buscar");
        return;
      }

      const idAPI = nomePTtoID[nomeBusca] || nomeBusca;
      if (planetsImgs[idAPI]) {
        setImageUrl(planetsImgs[idAPI]);
      } else {
        setImageUrl(earthImg); // fallback
      }

      const url = `https://api.le-systeme-solaire.net/rest/bodies/${idAPI}`;
      const response = await fetch(url);

      if (!response.ok) {
        console.error("Planeta não encontrado:", response.status);
        setData(null);
        return;
      }

      const result = await response.json();
      setData(result);
      setActiveTab("planetas");
      console.log("Planeta encontrado:", result);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setData(null);
    }
  }

  // Preparar dados das luas com segurança
  const luas = data?.moons || [];


  const seeMore = () => {
    navigate('/gallery-nasa')
  }

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
                placeholder="Digite o nome em inglês (ex: Earth)"
              />
              <button onClick={apiData}>Buscar</button>
            </div>

            {data ? (
              <div className="planetary-data">
                <h2>Dados do Planeta</h2>

                <div className="row">
                  <span className="label"><strong>Nome:</strong></span>
                  <span className="value">{data.englishName}</span>
                </div>

                <div className="row">
                  <span className="label"><strong>Luas:</strong></span>
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
                  <span className="label"><strong>Temperatura:</strong></span>
                  <span className="value">
                    {data.avgTemp !== undefined
                      ? `${(data.avgTemp - 273.15).toFixed(1)} °C`
                      : "N/D"}
                  </span>
                </div>

                <button className="exit" onClick={exit}>Sair</button>
              </div>
            ) : (
              <p>Nenhum dado para mostrar. Faça uma busca.</p>
            )}

            <div className="img">
              <img src={imageUrl} alt={`Imagem do planeta ${data?.englishName || ""}`} />
            </div>
          </div>
        )}

      {activeTab === "galeria" && (
  <div className="tab-content2">
    <h2>Galeria Espacial</h2>

    <div className="gallery">
      <img src={img1} alt="Imagem 1" />
      <img src={img2} alt="Imagem 2" />
      <img src={img3} alt="Imagem 3" className="img3"/>
      <img src={img4} alt="Imagem 4" className="img4"/>
      <img src={img5} alt="Imagem 5" className="img5"/>
      <img src={img6} alt="Imagem 6" className="img6"/>
      <img src={img7} alt="Imagem 7" className="img7"/>
      <img src={img8} alt="Imagem 8" className="img8"/>
      <img src={img9} alt="Imagem 9" className="img9"/>
      {/* Se quiser, pode adicionar mais imagens aqui */}
    </div>
        <button className="button-gallery" onClick={seeMore}>Ver mais</button>

  </div>
)}


        {activeTab === "apod" && (
          <div className="tab-content">
            <h2>APOD</h2>
            {/* Conteúdo APOD aqui */}
          </div>
        )}

        {activeTab === "previsao" && (
          <div className="tab-content">
            <h2>Previsão Espacial</h2>
            {/* Conteúdo previsão aqui */}
          </div>
        )}
      </div>
    </StylesAppNasa>
  );
}

export default AppNasa;
