import React from "react";
import Container from "../layouts/Container";
import HeroBg from "@/assets/HeroBackground.jpeg";

const PagesHeader = ({ pageTitle }) => {
  return (
    <div
      className="
        relative bg-cover bg-center bg-no-repeat w-full
        
      "
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      <Container className="h-full">
        <div className="h-full flex flex-col justify-center items-center py-16 md:py-20 lg:py-24">
          <div className="relative mt-10">
            <div className="max-w-3xl text-center">
              <h1 className="scroll-m-20 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                {pageTitle}
              </h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PagesHeader;
