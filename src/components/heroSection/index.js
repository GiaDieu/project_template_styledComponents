import React, { useState } from "react";
import data from "../../videos/data.mp4";
import { Button } from "../shared/ButtonElement";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroHeading,
  HeroParagraph,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={data} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroHeading>Kao made the imposibilities with capabilities</HeroHeading>
        <HeroParagraph>
          Sign Up today and receive your 30% discount towards your current and
          next payment
        </HeroParagraph>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
