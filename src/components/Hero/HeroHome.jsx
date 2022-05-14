import React from "react";
import HeroCarousel from "react-hero-carousel"
import HeroImg from "../images/lgbtq.webp"

//styles
import "./Hero.css";

export default () => (
  <HeroCarousel className="hero">  
    <container className="hero-text">
      <section className="hero-image">
        <img
          src={HeroImg}
          width="100%"
          height="100%"
        />
      </section> 
      <section className="text-on-image">
        <h1 className="title-text">Queer Hero</h1>
        <h2 className="sub-text">A safe space for the Queer community to support one another. You can give or receive time for career support, mental health support or anything else that you need help with.</h2>
      </section>
    </container>
    
  </HeroCarousel>
);

