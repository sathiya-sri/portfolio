import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen.js";
import ContactPage from "./Pages/ContactPage.js";
import Portfolio from "./Pages/Portfolio.js";
import BlogPost from "./components/BlogPost/BlogPost.js";
import AboutPage from "./Pages/AboutPage.js";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<BlogPost />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
