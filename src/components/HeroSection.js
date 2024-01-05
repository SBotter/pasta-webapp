import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import { useHistory } from "react-router-dom";

function HeroSection() {
  const history = useHistory();
  return (
    <div className="hero-container">
      {/*<video src="/videos/video-2.mp4" autoPlay loop muted />*/}
      <h1>
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
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          linkTo="/delivery"
          onClick={() => {
            history.push("/delivery");
          }}
        >
          WE DELIVERY!
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
