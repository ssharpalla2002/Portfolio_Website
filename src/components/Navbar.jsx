import React from "react";
import styled from "styled-components";

const Section = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 40px;
  box-sizing: border-box;
`;



// Logo
const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;      /* circle diameter */
  height: 45px;     /* circle diameter */
  background-color: #ffffff; /* white circle */
  border-radius: 50%;        /* makes it circular */
  cursor: pointer;
  padding: 0px;    /* inner spacing for logo image */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* optional subtle shadow */
  margin-left:30px;

  img {
    width: 75%;
    height: 75%;
    object-fit: contain; /* ensures logo fits inside circle */
    filter: invert(0); /* optional: remove invert if logo already colored */
  }
`;

// Nav container
const NavBar = styled.nav`
  display: flex;
  gap: 20px;
  /* Ensure nav does not overflow */
  flex-shrink: 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

// Nav items
const NavItem = styled.a`
  color: #ffffff;
  font-size: 16px;
  font-weight: 300;
  text-decoration: none;
  padding: 6px 10px;
  border-radius: 6px;
  transition: transform 0.25s ease, color 0.25s ease;

  &:hover {
    color: #dcdcdc;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 4px 8px;
  }
`;

export default function Navbar() {
  return (
    <Section>
      <Logo href="#Hero">
        <img src="/img/l1.png" alt="Logo" />
      </Logo>

      <NavBar>
        <NavItem href="#Who">Overview</NavItem>
        <NavItem href="#Services">Services</NavItem>
        <NavItem href="#Projects">Projects</NavItem>
        <NavItem href="#Contact">Contact</NavItem>
      </NavBar>
    </Section>
  );
}
