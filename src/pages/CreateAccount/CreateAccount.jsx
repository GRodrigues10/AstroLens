import React, { useState } from "react";
import { StylesCreateAccount } from "./Styles";
import space3 from "../../assets/space3.mp4";
import emailImg from "../../assets/o-email.png";
import passwordImg from "../../assets/senha.png";
import personImg from "../../assets/person.png";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPassword, setConfirmShowPassword] = useState(false);
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");

  const navigate = useNavigate();

  const register = () => {
    if (
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim() ||
      !firstName.trim() ||
      !lastName.trim() ||
      !birthDay.trim() ||
      !birthMonth.trim() ||
      !birthYear.trim()
    ) {
      alert("Preencha todos os campos!");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não são iguais!");
      return;
    }

    const newUser = { firstName, lastName, email, password, birthDay, birthMonth, birthYear };

    const usersList = JSON.parse(localStorage.getItem("usuarios")) || [];
    const emailExists = usersList.some(user => user.email === email);

    if (emailExists) {
      alert("Email já cadastrado!");
      return;
    }

    usersList.push(newUser);
    localStorage.setItem("usuarios", JSON.stringify(usersList));

    alert("Cadastro realizado com sucesso!");
    navigate("/"); // volta para login
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
    "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1900 + 1 }, (_, i) => currentYear - i);

  return (
    <StylesCreateAccount>
      <div className="video">
        <video autoPlay muted loop playsInline>
          <source src={space3} type="video/mp4" />
        </video>
      </div>

      <div className="content">
        <h1>Crie sua Conta</h1>

        <div className="name">
          <div className="input-icon">
            <img src={personImg} alt="Nome" />
            <input
              type="text"
              placeholder="Nome"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-icon">
            <img src={personImg} alt="Sobrenome" />
            <input
              type="text"
              placeholder="Sobrenome"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="input-icon">
          <img src={emailImg} alt="Email" />
          <input
            type="text"
            placeholder="Email"
            name="email-name"
            autoComplete="new-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-icon password-field">
          <img src={passwordImg} alt="Senha" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            name="password-name"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙉" : "🙈"}
          </span>
        </div>

        <div className="input-icon password-field">
          <img src={passwordImg} alt="Confirmar senha" />
          <input
            type={confirmShowPassword ? "text" : "password"}
            placeholder="Confirmar senha"
            name="confirm-password-name"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span
            className="toggle-password"
            onClick={() => setConfirmShowPassword(!confirmShowPassword)}
          >
            {confirmShowPassword ? "🙉" : "🙈"}
          </span>
        </div>

        <div className="birth">
          <div className="text">
            <h2>Data de Nascimento</h2>
          </div>
          <div className="data">
            <select value={birthDay} onChange={(e) => setBirthDay(e.target.value)}>
              <option value="">Dia</option>
              {days.map(day => <option key={day} value={day}>{day}</option>)}
            </select>

            <select value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)}>
              <option value="">Mês</option>
              {months.map((month,index) => <option key={index} value={index+1}>{month}</option>)}
            </select>

            <select value={birthYear} onChange={(e) => setBirthYear(e.target.value)}>
              <option value="">Ano</option>
              {years.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
          </div>
        </div>

        <button onClick={register}>Cadastrar</button>
      </div>
    </StylesCreateAccount>
  );
}

export default CreateAccount;
