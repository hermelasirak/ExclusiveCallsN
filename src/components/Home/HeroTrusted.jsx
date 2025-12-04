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

import Marquee from "react-fast-marquee";

const images = [
    Company1,
    Company2,
    Company3,
    Company4,
    Company5,
    Company6,
    Company7,
    Company8,
    Company9,
    Company10,
]

const HeroTrusted = () => {
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

        <Marquee speed={50} className="flex gap-10 py-4">
          {images.map((image, i) => (
            <div key={i} className="mx-10 opacity-70 hover:opacity-100">
              <img src={image} className="h-10 md:h-16 object-contain" />
            </div>
          ))}
        </Marquee>
      </div>
    </Container>
  )
}

export default HeroTrusted