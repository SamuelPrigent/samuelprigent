import React from "react";
import ReactDOM from "react-dom/client";
// components
import Header from "./components/Header.tsx"; // nav
import Footer from "./components/Footer.tsx"; // footer
// style
import "./style/App.scss";
import "./style/index.css";
// Router
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
// utils
import BubbleBackground from "./components/BubbleBackground.tsx";
import BackgroundGrid from "./components/BackgroundGrid.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <BackgroundGrid />
      <Header />
      <App />
      <Footer />
      <BubbleBackground />
    </BrowserRouter>
  </React.StrictMode>,
);
