import React, { useState, useEffect } from "react";
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

  // Verifica se já existe usuário logado
  useEffect(() => {
    const loggedUser = localStorage.getItem("usuarioLogado");
    if (loggedUser) {
      navigate('/app-nasa'); 
    }
  }, [navigate]);

  const enter = () => {
    if (!email.trim() || !password.trim()) {
      alert('Preencha todos os campos!');
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
    const storedUser = storedUsers.find(user => user.email === email && user.password === password);

    if (storedUser) {
      // Cria uma cópia segura do usuário sem a senha
      const safeUser = { ...storedUser };
      delete safeUser.password;

      localStorage.setItem("usuarioLogado", JSON.stringify(safeUser));
      navigate('/app-nasa');
    } else {
      alert('Email ou senha incorretos!');
    }
  };

  const forgotPassword = () => {
    navigate("/forgot-password");
  };

  const createAccount = () => {
    navigate('/create-account');
  }

  return (
    <StylesLoginScreen>
      <div className="video">
        <video autoPlay muted loop playsInline>
          <source src={earthVideo} />
        </video>
      </div>

      <div className="content">
        <h1>AstroLens</h1>

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
