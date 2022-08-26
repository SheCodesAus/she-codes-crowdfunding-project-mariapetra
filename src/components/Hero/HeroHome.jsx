import React from "react";
// import HeroCarousel from "react-hero-carousel"
// import HeroImg from "../images/lgbtq.webp"

//styles
import "./Hero.css";

export default () => (
  // <HeroCarousel className="hero">  
  //   <container className="hero-text">
  //     <section className="hero-image">
  //       {/* <img
  //         src={HeroImg}
  //         width="100%"
  //         height="100%"
  //       /> */}
  //     </section> 
  //     <section className="text-on-image">
  //       <h1 className="title-text">Queer Hero</h1>
  //       <h2 className="sub-text">A safe space for the Queer community to support one another. 
  //       You can give or receive time for career support, mental health support or anything else 
  //       that you need help with.</h2>
  //     </section>
  //   </container>

  <section className="hero">
    <section className="hero-text-section">
        <p className="hero-text"><span className="bg-color-text"><span class="hero-highlight title-text">Queer Hero </span> is a 
        <span class="hero-highlight"> safe space</span> for the Queer community to <span class="hero-highlight">support</span> one another. 
        You can give or receive time for career support, mental health support or anything else 
        that you need help with.</span></p>
    </section>
  </section>
  );
  
  {/* </HeroCarousel> */}

{/* <section className="hero">

    <section className="hero-text-section">
        <h1 className="hero-text">Share your <span class="hero-highlight"> wins </span> 
         with the <span class="hero-highlight">She Codes </span>
        community</h1>
    </section>

    <section className="qr-code-section qr-code-hero">
        <QRGenerator value="https://shrouded-wave-23056.herokuapp.com/live-win-walls/" />
    </section>
</section> */}

