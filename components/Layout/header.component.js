import React, { useState, useEffect } from "react";

import styled from "styled-components";
import Link from "next/link";
import { useSelector } from "react-redux";
import ToggleButton from "react-theme-toggle-button";
import "react-theme-toggle-button/dist/index.css";

const HeaderComponent = ({ dark, setDark }) => {
  const HamburgerDark = "/header/hamburger.png";
  const HamburgerWhite = "/header/hamburger-white.png";
  const [navLinks, setNavLinks] = useState([]);

  const { userInfo, isLoggedIn } = useSelector((state) => state.userLogin);

  // useEffect(() => {
  //   if (!isLoggedIn && !userInfo) {
  //     setNavLinks([
  //       { title: "Login", route: "/login" },
  //       { title: "Register", route: "/login" },
  //       { title: "About", route: "/about" },
  //     ]);
  //   } else {
  //     setNavLinks([
  //       { title: "Logout", route: "/", noLink: true },
  //       { title: "About", route: "/about" },
  //     ]);
  //   }
  // }, [isLoggedIn, userInfo]);

  return (
    <>
      <StyledNavbar>
        <StyledNavBrand>LOGO</StyledNavBrand>
        {/* <StyledNavLinks>
          {navLinks.map((item) =>
            item?.noLink ? (
              <Link href="/about" passHref>
                <StyledNavLink>{item?.title}</StyledNavLink>
              </Link>
            ) : (
              <StyledNavLink onClick={() => console.log("cornato")}>
                {item.title}
              </StyledNavLink>
            )
          )}
        </StyledNavLinks> */}
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
const StyledNavLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;
const StyledNavLink = styled.p`
  color: blue;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 768px) {
    display: none !important;
  }
`;

const StyledHamburger = styled.img`
  max-width: 45px;
  cursor: pointer;
`;
export default HeaderComponent;
