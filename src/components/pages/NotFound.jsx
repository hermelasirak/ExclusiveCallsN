import React from "react";
import { Link } from "react-router-dom";
import Seo from "../Seo";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const NotFound = () => (
  <>
    <Seo title="Page not found | Exclusive Calls" description="This page does not exist." path="/" robots="noindex, follow" />
    <Navbar />
    <main id="main-content" tabIndex={-1} className="min-h-[60vh] flex flex-col items-center justify-center px-6 pt-32 text-center">
      <h1 className="text-3xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-4 text-slate-700">The page you are looking for does not exist or has moved.</p>
      <Link to="/" className="mt-6 inline-block rounded-full bg-[#b93c00] px-6 py-3 font-semibold text-white">Go to the home page</Link>
    </main>
    <Footer />
  </>
);

export default NotFound;
