import React from "react";
import HeroCarousel from "react-hero-carousel"
import HeroImg from "../images/lgbtq.webp"

export default () => (
  <HeroCarousel className="Hero">   
    <img
      src={HeroImg}
      width="100%"
      height="100%"
    />
  </HeroCarousel>
);

