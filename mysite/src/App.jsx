import { useState, Suspense, lazy } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Navigate, Route, Routes } from "react-router-dom";
// import Layout from "./Layout";
// import Service from "./pages/servicesPage/Service";
// import AboutUs from "./pages/aboutPage/AboutUs";
// import Contact from "./pages/contactPage/Contact";
// import BlogPost from "./pages/blogPage/BlogPost";
// import Gallary from "./pages/gallaryPage/Gallary";
// import Testimony from "./pages/testimonyPage/Testimony";
// import FullImage from "./components/sliders/FullImage";
const Layout = lazy(() => import("./Layout"));
const Service = lazy(() => import("./pages/servicesPage/Service"));
const AboutUs = lazy(() => import("./pages/aboutPage/AboutUs"));
const Contact = lazy(() => import("./pages/contactPage/Contact"));
const BlogPost = lazy(() => import("./pages/blogPage/BlogPost"));
const Gallary = lazy(() => import("./pages/gallaryPage/Gallary"));
const Testimony = lazy(() => import("./pages/testimonyPage/Testimony"));
const FullImage = lazy(() => import("./components/sliders/FullImage"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/services" element={<Service />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogpost" element={<BlogPost />} />
            <Route path="/gallery" element={<Gallary />} />
            <Route path="/testimony" element={<Testimony />} />
            <Route path="/image/:imageId" element={<FullImage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
