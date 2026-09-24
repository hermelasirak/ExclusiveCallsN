import { Route, Routes } from "react-router-dom";

import ScrollToTop from "./utils/ScrollToTop";
import Layout from "./components/layouts/Layout";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Solutions from "./components/pages/Solutions";
import Pricing from "./components/pages/Pricing";
import Testimonials from "./components/pages/Testimonials";
import Contact from "./components/pages/Contact";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import Blog from "./components/pages/Blog";
import BlogDetails from "./components/pages/BlogDetails";
import NotFound from "./components/pages/NotFound";
import PrivacyChoices from "./components/pages/PrivacyChoices";
import CookieConsentBanner from "./components/CookieConsentBanner";

function App() {
  return (
    <>
      <ScrollToTop />
      <CookieConsentBanner />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/privacy-choices" element={<PrivacyChoices />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
