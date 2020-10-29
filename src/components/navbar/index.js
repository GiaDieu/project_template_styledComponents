import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavButton,
  NavButtonLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";

const NavItems = ["about", "discover", "services", "Sign Up"];
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">KAO</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {NavItems.map((item, index) => {
              return (
                <NavItem key={index}>
                  <NavLinks to={item}>{item}</NavLinks>
                </NavItem>
              );
            })}
          </NavMenu>
          <NavButton>
            <NavButtonLink to="signin">Sign In</NavButtonLink>
          </NavButton>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
