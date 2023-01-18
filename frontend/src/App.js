import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import VideoPage from "./components/VideoPage";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<VideoPage />} path="/VideoPage" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
