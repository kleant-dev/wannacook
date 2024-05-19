import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff3bf;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;

  & img {
    width: 5rem;
    height: 5rem;
  }
`;

const Title = styled.p`
  font-size: 3.2rem;
  font-weight: 700;
  color: #333;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
`;

const Nav = styled.ul<{ isOpen: boolean; isDesktop: boolean }>`
  list-style: none;
  display: ${({ isDesktop }) => (isDesktop ? "flex" : "none")};
  gap: 6.4rem;
  padding: 0 8.2rem;
  align-items: center;

  @media (max-width: 76.8rem) {
    flex-direction: column;
    gap: 3.2rem;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff3bf;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
`;

const Link = styled(NavLink)`
  &:link,
  &:visited {
    text-decoration: none;
    font-size: 2.4rem;
    font-weight: 300;
    color: var(--grey-color);
    padding: 0.8rem 1.6rem;
    transition: all 0.3s;
    border-bottom: solid 5px transparent;
    @media (max-width: 76.8rem) {
      font-size: 4.2rem;
    }
  }

  &:hover {
    color: #fcc419;
    border-bottom: solid 5px transparent !important;
  }

  &.active {
    border-bottom: solid 5px #fcc419;
  }
`;

const LogoLink = styled(NavLink)`
  &:link,
  &:visited {
    text-decoration: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2.4rem;
  cursor: pointer;
  z-index: 11; /* Ensure it stays above the Nav when open */

  @media (max-width: 768px) {
    display: block;
  }
`;

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 768);
    if (window.innerWidth > 768) {
      setIsOpen(false); // Close the mobile menu if resizing to desktop
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Header>
      <Container>
        <LogoLink to="/home" type="logo">
          <Logo>
            <img src="/chef.png" alt="logo" />
            <Title>wannacook</Title>
          </Logo>
        </LogoLink>
        <MenuButton onClick={toggleMenu}>{isOpen ? "✖" : "☰"}</MenuButton>
        <Nav isOpen={isOpen} isDesktop={isDesktop}>
          <Link to="/home" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/recipes" onClick={() => setIsOpen(false)}>
            Recipes
          </Link>
          <Link to="/favourites" onClick={() => setIsOpen(false)}>
            Favourites
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
        </Nav>
      </Container>
    </Header>
  );
}

export default Navigation;
