// Styles.jsx
import styled, { keyframes } from "styled-components";
import background from "../../../assets/spaceApp.png";

// Keyframe para efeito de carregamento pulsante azul <-> branco
const loadingPulse = keyframes`
  0% { color: #3b6cb7; }
  50% { color: white; }
  100% { color: #3b6cb7; }
`;

export const StylesApodNasa = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  width: 100%;
  min-height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  color: white;

  .apod-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  h2 {
    color: #d3d3d3;
    font-size: 1.55rem;
    margin-top: 20px;
  }

  .apod-content h3 {
    margin-top: 35px;
    margin-bottom: 15px;
  }

  .apod-content p {
    margin-top: 25px;
    text-align: justify;
    width: 90%;
    text-indent: 10px;
  }

  .apod-content img {
    width: 90%;
    height: 250px;
    border: 2px solid #3b6cb7;
    border-radius: 10px;
    max-width: 800px;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  button {
    font-size: 1.1rem;
    background-color: #3b6cb7;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    width: 90%;
    max-width: 300px;
    font-weight: bold;
    transition: 0.4s ease;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    display: block;

    &:hover {
      background-color: #2467ca;
    }
  }

  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    height: 100vh;
    animation: ${loadingPulse} 1.5s infinite;
  }

  @media screen and (min-width: 530px) {
    h2 {
      font-size: 2rem;
    }
    .apod-content h3 {
      margin-top: 20px;
      font-size: 1.4rem;
    }
    .apod-content p {
      font-size: 1.1rem;
    }
    .apod-content img {
      height: 350px;
    }
    button {
      padding: 15px;
      font-size: 1.2rem;
    }
    .loading {
      font-size: 1.7rem;
    }
  }

  @media screen and (min-width: 768px) {
    h2 {
      font-size: 2.2rem;
    }
    .apod-content h3 {
      font-size: 1.5rem;
    }
    .apod-content img {
      max-height: 300px !;
    }
    .apod-content p {
      font-size: 1.3rem;
      width: 90%;
    }
    button {
      padding: 15px;
      font-size: 1.3rem;
    }
    .loading {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 992px) {
    h2 {
      font-size: 2.3rem;
    }
    .apod-content h3 {
      font-size: 1.6rem;
    }
    .apod-content img {
      height: 500px;
    }
    .apod-content p {
      font-size: 1.4rem;
      width: 80%;
    }
    .loading {
      font-size: 2.2rem;
    }
  }
`;
