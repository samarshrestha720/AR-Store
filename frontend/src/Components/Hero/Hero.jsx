import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import ColorfulText from "../Common/ColorfulText";
import hero_image from "../Assets/hero_image.jpg";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>
          {" "}
          <ColorfulText>New</ColorfulText> Arrivals Only
        </h2>

        <div className="collections-everyone">
          <p>collections for everyone</p>
        </div>

        <div className="hero-latest-btn">
          <span>Latest Collection</span>
          <ArrowRight />
        </div>
      </div>

      <figure className="hero-right">
        <img src={hero_image} alt="" />
      </figure>
    </div>
  );
};

export default Hero;
