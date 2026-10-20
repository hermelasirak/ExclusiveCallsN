import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900 focus:shadow-lg"
    >
      Skip to main content
    </a>
    <Navbar />
    <main id="main-content" tabIndex={-1} className="outline-none">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
