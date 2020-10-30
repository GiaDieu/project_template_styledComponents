import React from "react";
import { objectFooterInfo } from "./FooterData";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElements";
import SocialMediaLogo from "./SocialMediaLogo";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            {objectFooterInfo.data.slice(0, 2).map((ele, index) => {
              return (
                <FooterLinkItems key={`${ele.id}${index}`}>
                  <FooterLinkTitle>{ele.title}</FooterLinkTitle>
                  {ele.desc.map((el, i) => (
                    <FooterLink to="signin" key={i}>
                      {el}
                    </FooterLink>
                  ))}
                </FooterLinkItems>
              );
            })}
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            {objectFooterInfo.data.slice(2, 4).map((ele, index) => (
              <FooterLinkItems key={`${ele.id}${index}`}>
                <FooterLinkTitle>{ele.title}</FooterLinkTitle>
                {ele.desc.map((el, i) => (
                  <FooterLink to="signin" key={i}>
                    {el}
                  </FooterLink>
                ))}
              </FooterLinkItems>
            ))}
          </FooterLinksWrapper>
        </FooterLinksContainer>
        {/* copyrights */}
        <SocialMediaLogo />
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
