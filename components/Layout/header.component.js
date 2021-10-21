import React, { useState } from "react";

import styled from "styled-components";

import { useSelector } from "react-redux";
import ToggleButton from "react-theme-toggle-button";
import "react-theme-toggle-button/dist/index.css";

const HeaderComponent = ({ dark, setDark }) => {
  const HamburgerDark = "/header/hamburger.png";
  const HamburgerWhite = "/header/hamburger-white.png";

  return (
    <>
      <StyledNavbar>
        <StyledNavBrand>LOGO</StyledNavBrand>

        <ToggleButton isDark={dark} onChange={setDark} />
        <StyledHamburger src={!dark ? HamburgerWhite : HamburgerDark} />
      </StyledNavbar>
    </>
  );
};

const StyledNavbar = styled.nav`
  padding: 16px 32px;
  margin: 0;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.background};
`;

const StyledNavBrand = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.color};
`;

const StyledHamburger = styled.img`
  max-width: 45px;
  cursor: pointer;
`;
export default HeaderComponent;
