import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import ScrollToTop from "./utils/ScrollToTop";
import Layout from "./components/layouts/Layout";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Solutions from "./components/pages/Solutions";
import Pricing from "./components/pages/Pricing";
import Testimonials from "./components/pages/Testimonials";
import Contact from "./components/pages/Contact";


function App() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/solutions" element={<Solutions/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/testimonials" element={<Testimonials/>}/>
          <Route path="/contactus" element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
