import React, { useState } from 'react'
import { StylesAppNasa } from './Styles'
import earth from '../../assets/earth.png'
import { useNavigate } from 'react-router-dom'

function AppNasa() {
  const [activeTab, setActiveTab] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { id: 'planetas', label: 'Planetas e Exoplanetas' },
    { id: 'galeria', label: 'Galeria Espacial' },
    { id: 'apod', label: 'APOD' },
    { id: 'previsao', label: 'Previsão Espacial' }
  ];

  const navigate = useNavigate();


  function handleTabClick(id) {
    setActiveTab(id)
    setMenuOpen(false)
  }


  function exit(){
    navigate('/')
  }
  return (
    <StylesAppNasa>
      <h1>NASA Space Explorer</h1>

      <div className="content">
        {/* Botão hambúrguer no topo direito */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          ☰
        </button>

        {/* Menu hambúrguer dentro da content - aparece só quando aberto no mobile */}
        {menuOpen && (
          <nav className="menu-hamburger mobile-menu">
            {tabs.map(tab => (
              <div
                key={tab.id}
                className={`aba-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </div>
            ))}
          </nav>
        )}

        {/* Menu fixo visível só no desktop */}
        <nav className="menu-desktop">
          {tabs.map(tab => (
            <div
              key={tab.id}
              className={`aba-item ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </div>
          ))}
        </nav>

        {/* Conteúdo da aba ativa */}
        {activeTab === 'planetas' && (
          <div className="tab-content">
            <h2>Planetas e Exoplanetas</h2>
            {/* Conteúdo da aba */}
          </div>
        )}
        {activeTab === 'galeria' && (
          <div className="tab-content">
            <h2>Galeria Espacial</h2>
            {/* Conteúdo da aba */}
          </div>
        )}
        {activeTab === 'apod' && (
          <div className="tab-content">
            <h2>APOD</h2>
            {/* Conteúdo da aba */}
          </div>
        )}
        {activeTab === 'previsao' && (
          <div className="tab-content">
            <h2>Previsão Espacial</h2>
            {/* Conteúdo da aba */}
          </div>
        )}

        {/* Conteúdo fixo abaixo, independente da aba */}
        <div className="data-text">
          <h2>Pesquise o Planeta:</h2>
          <div className="input">
            <input type="text" />
            <button>Buscar</button>
          </div>
          <div className="planetary-data">
            <h2>Dados do Planeta</h2>
            <div className="row">
              <span className="label"><strong>Name:</strong> </span>
              <span className="value">Terra</span>
            </div>
            <div className="row">
              <span className="label"><strong>Radius:</strong> </span>
              <span className="value">1:00 Rg</span>
            </div>
            <div className="row">
              <span className="label"><strong>Temperature:</strong> </span>
              <span className="value">208 K</span>
            </div>

            <button className='exit' onClick={exit}>Sair</button>
          </div>
          <div className="img"><img src={earth} alt="Imagem da terra" /></div>
        </div>
      </div>
    </StylesAppNasa>
  )
}

export default AppNasa
