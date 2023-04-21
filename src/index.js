import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import Links from "./Links";
import Footer from "./Footer";
import Skill from "./Skill";
import reportWebVitals from "./reportWebVitals";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <About />
    <Skill />
    <Gallery />
    <Links />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
