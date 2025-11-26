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
    <div className=''>
        <Container>
            <div className='relative z-10 container py-12 lg:py-24 mx-auto'>
                <div className="flex flex-col md:flex-row items-center gap-6 w-full">
                    {/* Left Content */}
                    <div className="md:w-1/5 w-full">
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold'>Tursted By</h1>
                    </div>
                    {/* Right Side - Marquee */}
                    <div className='md:w-4/5 w-full overflow-hidden'>
                        <Marquee speed={50} className='flex'>
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className='flex mx-6'
                                >
                                    <img src={image} className='h-20 w-auto object-contain opacity-80 hover:opacity-100 transition'/>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default HeroTrusted