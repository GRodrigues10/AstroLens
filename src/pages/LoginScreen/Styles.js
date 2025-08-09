import styled from "styled-components";

export const StylesLoginScreen = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    overflow: hidden;
  }

  .video video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: left;
  }

  .content {
    width: 90%;
    max-width: 800px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(10, 20, 40, 0.7);
    border: 1px solid #0d1b2a;
    border-radius: 15px;
    gap: 20px;
    color: white;
  }

  .content h1 {
    font-size: 2.3rem;
    position: relative;
    bottom: 10px;
  }

  /* Wrapper para inputs com ícones */
  .input-wrapper {
    position: relative;
    width: 90%;
    display: flex;
    align-items: center;
  }

  /* Ícone posicionado à esquerda dentro do input-wrapper */
  .input-icon {
    position: absolute;
    left: 12px;
    width: 24px;
    height: 24px;
    pointer-events: none;
  }

  /* Inputs dentro do wrapper */
  .input-wrapper input {
    width: 100%;
    padding: 12px 40px 12px 44px; /* Espaço para o ícone (24px + padding extra) */
    font-size: 1.1rem;
    border-radius: 5px;
    background-color: rgba(13, 27, 42, 0.6);
    border: 1px solid #0d1b2a;
    color: #ffffff;
    outline: none;
  }

  /* Ícone para mostrar/esconder senha */
  .input-wrapper span {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 1.2rem;
    user-select: none;
  }

  .content button {
    width: 90%;
    padding: 12px;
    border-radius: 5px;
    font-size: 1.1rem;
    background-color: #fd6818ff;
    color: #ffffff;
    border: none;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      background-color: #ff5900ff;
    }
  }

  .accounts {
    width: 90%;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    position: relative;
    top: 15px;
    color: #e0e0e0;
    cursor: pointer;
    transition: 0.4s ease;
    font-size: 0.9rem;
    &:hover {
      color: #c4babaff;
    }
  }

  @media screen and (min-width: 768px) {
    .content {
      height: 500px;
    }
    .content h1 {
      font-size: 3rem;
    }
    .content input {
      padding: 20px 45px 20px 45px;
      font-size: 1.3rem;
    }
    .content button {
      padding: 20px;
      font-size: 1.3rem;
    }

    .accounts {
      font-size: 1.1rem;
    }
  }
`;
