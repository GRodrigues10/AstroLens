import styled from "styled-components";
import background from '../../../assets/spaceApp.png'

export const StylesGallery = styled.div`
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
  align-items: center;  /* centraliza conteúdo horizontalmente */
  padding-bottom: 30px; /* para garantir espaço no final da página */

  h1 {
    font-size: 2.5rem;
    color: #D3D3D3;
    text-align: center;
    padding-top: 20px;
  }

  .gallery-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    gap: 10px;
    transition: 0.4s ease;
  }

  .gallery-container img {
    height: 250px;
    width: 280px;
    border: 2px solid #00CED1;
    border-radius: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      transform: scale(1.025);
    }
  }

  button {
    font-size: 1.1rem;
    background-color: #3B6CB7;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    width: 90%;
    max-width: 300px;
    font-weight: bold;
    transition: 0.4s ease;

    margin-top: 30px; /* espaço *acima* do botão, afasta das imagens */
    margin-left: auto;
    margin-right: auto;
    display: block; /* para centralizar o botão */
    
    &:hover {
      background-color: #2467ca;
    }
  }

  @media screen and (min-width: 530px) {
    h1 {
      font-size: 2.6rem;
    }

    .gallery-container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }

    button {
      font-size: 1.2rem;
      padding: 12px;
    }
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 2.8rem;
    }

    button {
      font-size: 1.3rem;
      padding: 15px;
    }
  }
`;
