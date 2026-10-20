import React from 'react';
import Container from '../layouts/Container';

import Company1 from "@/assets/Home/TrustedBy/Logo01.png";
import Company2 from "@/assets/Home/TrustedBy/Logo02.png";
import Company3 from "@/assets/Home/TrustedBy/Logo03.png";
import Company4 from "@/assets/Home/TrustedBy/Logo04.png";
import Company5 from "@/assets/Home/TrustedBy/Logo05.png";
import Company6 from "@/assets/Home/TrustedBy/Logo06.png";
import Company7 from "@/assets/Home/TrustedBy/Logo07.png";
import Company8 from "@/assets/Home/TrustedBy/Logo08.png";
import Company9 from "@/assets/Home/TrustedBy/Logo09.png";
import Company10 from "@/assets/Home/TrustedBy/Logo10.png";

import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Pause, Play } from "lucide-react";

const images = [
    { src: Company1, alt: "Ardon Insurance Brokers" },
    { src: Company2, alt: "AqualiteUS" },
    { src: Company3, alt: "American Mortgage Partners" },
    { src: Company4, alt: "DW Weight & Body Management" },
    { src: Company5, alt: "Bristol Insurance" },
    { src: Company6, alt: "American Waste Group" },
    { src: Company7, alt: "Varas Insurance Brokerage, Inc." },
    { src: Company8, alt: "Allstate" },
    { src: Company9, alt: "Client 9" },
    { src: Company10, alt: "Client 10" },
]

const HeroTrusted = () => {
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  }, []);

  return (
    <Container>
      <div className="py-16">
        
        {/* ⭐ CHANGE → Title aligned left with underline */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-10 h-1 bg-yellow-400 rounded-full"></div>
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            Trusted by
          </h2>
        </div>

        <ul className="sr-only">
          {images.map((img) => <li key={img.alt}>{img.alt}</li>)}
        </ul>
        <div className="flex justify-end mb-2">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-pressed={!playing}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-1 text-sm text-white"
          >
            {playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
            {playing ? "Pause logos" : "Play logos"}
          </button>
        </div>
        <div aria-hidden="true">
          <Marquee speed={50} play={playing} pauseOnHover className="flex gap-10 py-4">
            {images.map((img, i) => (
              <div key={i} className="mx-10 opacity-70 hover:opacity-100">
                <img src={img.src} alt="" className="h-10 md:h-16 object-contain" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </Container>
  )
}

export default HeroTrusted