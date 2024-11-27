import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Service from "./pages/servicesPage/Service";
import AboutUs from "./pages/aboutPage/AboutUs";
import Contact from "./pages/contactPage/Contact";
import BlogPost from "./pages/blogPage/BlogPost";
import Gallary from "./pages/gallaryPage/Gallary";
import Testimony from "./pages/testimonyPage/Testimony";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<Service />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogpost" element={<BlogPost />} />
          <Route path="gallery" element={<Gallary />} />
          <Route path="testimony" element={<Testimony />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
