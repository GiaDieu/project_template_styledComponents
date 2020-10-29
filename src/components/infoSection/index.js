import React from "react";
import { Button } from "../shared/ButtonElement";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  ColumnPrimary,
  ColumnSecondary,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  darkText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <ColumnPrimary>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </ColumnPrimary>
            <ColumnSecondary>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </ColumnSecondary>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
