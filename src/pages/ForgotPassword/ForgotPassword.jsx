import React, { useState } from "react";
import { StylesForgotPassword } from "./Styles";
import space from "../../assets/space2.mp4";
import { useNavigate } from "react-router-dom";
import passwordImg from '../../assets/senha.png'; // importe a imagem

function ForgotPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const navigate = useNavigate();

  const changePassword = () => {
    if (!newPassword.trim() || !confirmNewPassword.trim()) {
      alert("Preencha todos os campos!");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      alert("As senhas não são iguais!");
      return;
    }
    navigate("/");
  };

  return (
    <StylesForgotPassword>
      <div className="video">
        <video autoPlay muted loop playsInline>
          <source src={space} type="video/mp4" />
        </video>
      </div>

      <div className="content">
        <h1>Esqueceu a Senha?</h1>

        <div className="input-container">
          <img src={passwordImg} alt="password icon" className="input-icon" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Digite a nova senha..."
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <span
            className="toggle-emoji"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙉" : "🙈"}
          </span>
        </div>

        <div className="input-container">
          <img src={passwordImg} alt="password icon" className="input-icon" />
          <input
            type={confirmShowPassword ? "text" : "password"}
            placeholder="Confirmar a nova senha..."
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <span
            className="toggle-emoji"
            onClick={() => setConfirmShowPassword(!confirmShowPassword)}
          >
            {confirmShowPassword ? "🙉" : "🙈"}
          </span>
        </div>

        <button onClick={changePassword}>Redefinir</button>
      </div>
    </StylesForgotPassword>
  );
}

export default ForgotPassword;
