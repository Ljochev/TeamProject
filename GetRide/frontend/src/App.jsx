import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
// import "./App.css";
import Root from "./routes/Root.jsx";
import Layout from "./routes/Layout.jsx";
import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import HowItWorksPage from "./pages/HowItWorks/HowItWorksPage";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Root />}>
          <Route path="/" element={<Layout header={true} footer={true}><HomePage /></Layout>} />
          <Route path="/about-us" element={<Layout header={true} footer={true}><AboutUsPage /></Layout>} />
          <Route path="/how-it-works" element={<Layout header={true} footer={true}><HowItWorksPage /></Layout>} />
          <Route path="/contact" element={<Layout header={true} footer={true}><ContactPage /></Layout>} />
          <Route path="/login" element={<Layout><LoginPage /></Layout>} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
