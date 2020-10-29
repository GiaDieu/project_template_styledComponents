import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  background-color: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.875rem; //30px;
  height: 1100px;
  position: relative;
  z-index: 1;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 0.5rem 1.5rem; // 8px - 24px
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroHeading = styled.h1`
  color: #fff;
  font-size: 3rem; // 48px
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem; //40px
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem; //32px
  }
`;

export const HeroParagraph = styled.p`
  margin-top: 1.5rem; //24px
  color: #fff;
  text-align: center;
  max-width: 600px;
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem; //24px
  }
  @media screen and (max-width: 480px) {
    font-size: 1.125rem; //18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 0.5rem; // 8px
  font-size: 1.25rem; // 20px
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 0.5rem; // 8px
  font-size: 1.25rem; // 20px
`;
