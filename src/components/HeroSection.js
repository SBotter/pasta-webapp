import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/*<video src="/videos/video-2.mp4" autoPlay loop muted />*/}
      <h1>
        {" "}
        <p>WELCOME TO </p>
        <p>MICHELE'S FRESH PASTA</p>
      </h1>
      <p> The Artisanal Delight of Handcrafted Pasta Perfection!</p>
      <p>where passion meets pasta.</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          PLACE YOUR ORDER
        </Button>
      </div>
      <p>WE DELIVERY!</p>
    </div>
  );
}

export default HeroSection;
