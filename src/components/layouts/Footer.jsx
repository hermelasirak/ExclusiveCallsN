import { Link } from "react-router-dom";
import Container from "./Container";

import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/assets/Logo.png";
import { useState } from "react";
import FooterImg from "@/assets/FooterImg.png"; 
import { Lock, CheckCircle2, Trophy, Zap } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const [isContactDialogOpen, setContactDialogOpen] =useState(false);

  return (
    // ⭐ CHANGE: dark navy footer background, remove white/dark mix + background image
    <footer className="w-full bg-[#0b1630] text-white pt-12 md:pt-16 pb-8">
      <Container>
        <div className="flex flex-col items-center gap-8 md:gap-10">
          {/* Logo */}
          <div className="flex justify-center">
            <img src={Logo} alt="Exclusive Calls Logo" className="h-8 md:h-10" />
          </div>

          {/* Nav links */}
          <nav
            className="
              flex flex-col sm:flex-row items-center justify-center
              gap-3 sm:gap-6 text-sm md:text-base
            "
          >
            {/* ⭐ CHANGE: add hover color + subtle transition */}
            <Link
              to="/"
              className="hover:text-orange-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="hover:text-orange-400 transition-colors"
            >
              Services
            </Link>
            <Link
              to="/pricing"
              className="hover:text-orange-400 transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/testimonials"
              className="hover:text-orange-400 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              to="/contactus"
              className="hover:text-orange-400 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Contact row */}
          <div
            className="
              flex flex-col md:flex-row items-center justify-center
              gap-3 md:gap-6 text-xs md:text-sm text-slate-200
            "
          >
            {/* ⭐ CHANGE: icon + label pairs with subtle hover on links */}
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-orange-400" />
              <a
                href="mailto:info@exclusivecalls.com"
                className="hover:text-orange-300 transition-colors"
              >
                info@exclusivecalls.com
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange-400" />
              <a
                href="tel:+18884843515"
                className="hover:text-orange-300 transition-colors"
              >
                +1 (888) 484-3515
              </a>
            </div>

            <div className="flex items-center gap-2 text-center md:text-left">
              <MapPin className="w-4 h-4 text-orange-400" />
              <span className="max-w-xs">
                1309 Coffeen Ave Suite 2397, Sheridan, WY 82801
              </span>
            </div>
          </div>

          {/* ⭐ CHANGE: feature cards row */}
          <div
            className="
              grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6
              w-full max-w-4xl
            "
          >
            <div className="bg-[#111a3a] rounded-2xl px-4 py-5 flex flex-col items-center gap-3">
              <Lock className="w-6 h-6 text-slate-100" />
              <p className="text-xs md:text-sm text-slate-200 text-center">
                Secure & Confidential
              </p>
            </div>
            <div className="bg-[#111a3a] rounded-2xl px-4 py-5 flex flex-col items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              <p className="text-xs md:text-sm text-slate-200 text-center">
                Verified Results
              </p>
            </div>
            <div className="bg-[#111a3a] rounded-2xl px-4 py-5 flex flex-col items-center gap-3">
              <Trophy className="w-6 h-6 text-amber-400" />
              <p className="text-xs md:text-sm text-slate-200 text-center">
                Industry Leader
              </p>
            </div>
            <div className="bg-[#111a3a] rounded-2xl px-4 py-5 flex flex-col items-center gap-3">
              <Zap className="w-6 h-6 text-yellow-300" />
              <p className="text-xs md:text-sm text-slate-200 text-center">
                Fast Setup
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mt-2" />

          {/* Copyright */}
          <div className="text-[11px] md:text-xs text-slate-400 text-center">
            © {currentYear} Exclusive Calls. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer