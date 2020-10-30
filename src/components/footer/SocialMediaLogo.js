import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  WebsiteRights,
  SocialIcon,
  SocialIconLink,
} from "./FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const SocialMediaLogo = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <SocialMedia>
      <SocialMediaWrapper>
        <SocialLogo to="/" onClick={toggleHome}>
          KAO
        </SocialLogo>
        <WebsiteRights>
          KAO &copy; {new Date().getFullYear()} All Rights reserved.
        </WebsiteRights>
        <SocialIcon>
          <SocialIconLink
            href="https://www.facebook.com/"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebook />
          </SocialIconLink>
          <SocialIconLink
            href="https://www.instagram.com/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram />
          </SocialIconLink>
          <SocialIconLink
            href="https://www.youtube.com/"
            target="_blank"
            aria-label="Youtube"
          >
            <FaYoutube />
          </SocialIconLink>
          <SocialIconLink
            href="https://twitter.com/"
            target="_blank"
            aria-label="Twitter"
          >
            <FaTwitter />
          </SocialIconLink>
          <SocialIconLink
            href="https://www.linkedin.com/feed/"
            target="_blank"
            aria-label="Linkedin"
          >
            <FaLinkedin />
          </SocialIconLink>
        </SocialIcon>
      </SocialMediaWrapper>
    </SocialMedia>
  );
};

export default SocialMediaLogo;
