import React from "react";
import styled from "styled-components";

// --- Navbar Container ---
const Section = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  display: flex;
  justify-content: space-between; /* logo left, nav right */
  align-items: center;

  padding: 10px 20px; /* smaller padding helps fit items */
  box-sizing: border-box;
`;

// Logo
const Logo = styled.a`
  img {
    height: 42px;
    width: auto;
    cursor: pointer;
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
  color: #000;
  font-size: 16px;
  font-weight: 300;
  text-decoration: none;
  padding: 6px 10px;
  border-radius: 6px;
  transition: transform 0.25s ease, color 0.25s ease;

  &:hover {
    color: #ff6f00;
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
