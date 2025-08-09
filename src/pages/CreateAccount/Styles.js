import styled from "styled-components";

export const StylesCreateAccount = styled.div`
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
    object-position: center;
  }

  .content {
    width: 90%;
    max-width: 850px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    background: linear-gradient(
      135deg,
      rgba(30, 15, 58, 0.85),
      rgba(15, 28, 46, 0.85)
    );
    border-radius: 12px;
    box-shadow: 0 0 25px rgba(255, 0, 255, 0.2);
    backdrop-filter: blur(6px);
    color: #fff;
    gap: 10px;
  }

  .content h1 {
    color: #ff66cc;
    margin-bottom: 10px;
    text-align: center;
  }

  .content input,
  .content select {
    width: 100%;
    padding: 12px;
    margin: 5px 0;
    border: none;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    outline: none;
    font-size: 1.1rem;
  }

  .content option{
    background-color: rgba(255, 255, 255, 0.1);
    color: black;
  }

  .content .name {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  .content input::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  /* Estilo do input com ícone */
  .input-icon {
    position: relative;
    width: 100%;
  }

  .input-icon img {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    opacity: 0.8;
  }

  .input-icon input {
    padding-left: 40px; /* Espaço pro ícone */
  }

  /* Birth */
  .birth {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .birth .text h2 {
    margin: 0;
    font-size: 1.2rem;
    color: #ff66cc;
    text-align: left;
  }

  .birth .data {
    display: flex;
    gap: 10px;
  }

  .content button {
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(90deg, #ff66cc, #9933ff);
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease;
    font-size: 1.1rem;
  }

  .content button:hover {
    opacity: 0.85;
  }

  @media screen and (min-width: 768px) {
    .content h1 {
      font-size: 2.8rem;
    }

    .content .name {
      width: 100%;
      flex-direction: row;
    }

    .birth {
      width: 80%;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .content input {
      font-size: 1.2rem;
    }

    .birth .text {
      flex: 1;
      text-align: right;
      padding-right: 10px;
    }

    .birth .text h2 {
      font-size: 1.6rem;
    }

    .birth .data {
      flex: 2;
      display: flex;
      gap: 20px;
      width: 80%;
    }

    .content select {
      padding: 15px;
      cursor: pointer;
    }

    .content button {
      padding: 15px;
      font-size: 1.2rem;
    }
  }

  /* Desktop */
  @media screen and (min-width: 1200px) {
    .content {
      width: 100%;
      height: 680px;
    }

    .content h1 {
      font-size: 3rem;
    }

    .content .name {
      width: 100%;
      flex-direction: row;
    }

    .content input {
      padding: 20px;
      font-size: 1.3rem;
      padding-left: 50px;
    }

    .birth {
      width: 80%;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .birth .text {
      flex: 1;
      text-align: right;
      padding-right: 10px;
    }

    .birth .text h2 {
      font-size: 1.8rem;
    }

    .birth .data {
      flex: 2;
      display: flex;
      gap: 20px;
      width: 80%;
    }

    .content select {
      padding: 20px;
    }

    .content button {
      padding: 20px;
      font-size: 1.3rem;
    }

    .content img {
      width: 25px;
      height: 25px;
    }
  }

  /* ===== Novo para mostrar/ocultar senha ===== */
  .password-field {
    position: relative;
  }

  .toggle-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    color: white;
    opacity: 0.8;
  }

  .toggle-password:hover {
    opacity: 1;
  }
`;
