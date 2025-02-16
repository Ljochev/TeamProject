import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./i18n";
import { useState } from "react";
// import "./App.css";
import Root from "./routes/Root.jsx";
import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import HowItWorksPage from "./pages/HowItWorks/HowItWorksPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Root />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
