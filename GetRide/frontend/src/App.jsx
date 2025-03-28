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
import ConfirmEmail from "./pages/LoginPage/ConfirmEmail.jsx";
import RegisterPage from "./pages/LoginPage/RegisterPage.jsx";
import PasswordResetPage from "./pages/LoginPage/ResetPasswordPage.jsx";
import RidesPage from "./pages/Rides/RidesPage.jsx";
import GoogleMaps from "./components/GoogleMaps/GoogleMaps.jsx";

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
            path="/confirmEmail"
            element={
              <Layout>
                <ConfirmEmail />
              </Layout>
            }
          />
          <Route
            path="/register"
            element={
              <Layout>
                <RegisterPage />
              </Layout>
            }
          />
           <Route
            path="/passwordReset"
            element={
              <Layout>
                <PasswordResetPage />
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
          <Route
            path="/google"
            element={
              <Layout header={true} footer={false}>
                <GoogleMaps />
              </Layout>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
