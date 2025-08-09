import styled from "styled-components";

export const StylesForgotPassword = styled.div`
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
    max-width: 800px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.85);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    gap: 20px;
    color: white;
  }

  .content h1 {
    font-size: 1.9rem;
    position: relative;
    bottom: 10px;
  }

  .input-container {
  position: relative;
  width: 90%;
}

.input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  pointer-events: none;
}

.input-container input {
  width: 100%;
  padding: 12px 40px 12px 44px; /* espaço para o ícone */
  font-size: 1.1rem;
  border-radius: 5px;
  background-color: #2c2c2c;
  border: 1px solid #2c2c2c;
  color: #ffffff;
  outline: none;
}

.toggle-emoji {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 18px;
}

  .content button {
    width: 90%;
    padding: 12px;
    border-radius: 5px;
    font-size: 1.1rem;
    background-color: #ffcc00;
    color: black;
    border: none;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      background-color: #d8b011ff;
    }
  }

  @media screen and (min-width: 768px) {
    .content {
      height: 500px;
    }
    .content h1 {
      font-size: 3rem;
    }
    .input-container input {
      padding: 20px 60px 20px 45px;
      font-size: 1.3rem;
    }
    .content button {
      padding: 20px;
      font-size: 1.3rem;
    }
  }
`;
