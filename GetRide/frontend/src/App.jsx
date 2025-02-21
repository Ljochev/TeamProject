import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./i18n";
import { useState } from "react";
// import "./App.css";
import Root from "./routes/Root.jsx";
import Layout from "./routes/Layout.jsx";
import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import HowItWorksPage from "./pages/HowItWorks/HowItWorksPage";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RidesPage from "./pages/Rides/RidesPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Root />}>
          <Route
            path="/"
            element={
              <Layout header={true} footer={true}>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/about-us"
            element={
              <Layout header={true} footer={true}>
                <AboutUsPage />
              </Layout>
            }
          />
          <Route
            path="/how-it-works"
            element={
              <Layout header={true} footer={true}>
                <HowItWorksPage />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout header={true} footer={true}>
                <ContactPage />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <LoginPage />
              </Layout>
            }
          />
          <Route
            path="/rides"
            element={
              <Layout header={true} footer={false}>
                <RidesPage />
              </Layout>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
