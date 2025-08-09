import React, { useState } from "react";
import { StylesLoginScreen } from "./Styles";
import earthVideo from "../../assets/earth.mp4";
import { useNavigate } from "react-router-dom";
import emailImg from '../../assets/o-email.png';
import passwordImg from '../../assets/senha.png';

function LoginScreen() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const enter = () => {
    if(!email.trim() || !password.trim()){
      alert('Preencha todos os campos!');
      return;
    }
    navigate('/app-nasa');
  }


  const forgotPassword = () => {
    navigate("/forgot-password");
  };

  const createAccount = () => {
    navigate('/create-account')
  }
  return (
    <StylesLoginScreen>
      <div className="video">
        <video autoPlay muted loop playsInline>
          <source src={earthVideo} />
        </video>
      </div>

      <div className="content">
        <h1>AstroView</h1>

        {/* Input email com ícone */}
        <div className="input-wrapper">
          <img src={emailImg} alt="email icon" className="input-icon" />
          <input
            type="text"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="new-email"
            name="userEmail"
          />
        </div>

        {/* Input senha com ícone e botão de mostrar senha */}
        <div className="input-wrapper">
          <img src={passwordImg} alt="password icon" className="input-icon" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            name="userPassword"
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "🙉" : "🙈"}
          </span>
        </div>

        <button onClick={enter}>Entrar</button>
        <div className="accounts">
          <p onClick={forgotPassword}>Esqueceu a Senha?</p>
          <p onClick={createAccount}>Criar Conta</p>
        </div>
      </div>
    </StylesLoginScreen>
  );
}

export default LoginScreen;
