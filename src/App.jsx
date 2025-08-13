import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import AppNasa from "./pages/AppNasa/AppNasa";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import GalleryNasa from "./pages/AppNasa/Gallery/GalleryNasa";
import ApodNasa from "./pages/AppNasa/Apod/ApodNasa";


function App() {
  return (
    <>
      <Router basename="/AstroView">
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/app-nasa" element={<AppNasa />} />
          <Route path="/gallery-nasa" element={<GalleryNasa />} />
          <Route path="/apod-nasa" element={<ApodNasa/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
