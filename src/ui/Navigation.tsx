import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  & img {
    width: 5rem;
    height: 5rem;
  }
  background-color: #fff3bf;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  font-size: 3.2rem;
  font-weight: 700;
  color: #333;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 3rem;
`;

const Header = styled.header`
  width: 100%;
`;

const Nav = styled.ul`
  list-style: none;
  display: flex;
  gap: 6.4rem;
  padding: 0 8.2rem;
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

function Navigation() {
  return (
    <Header>
      <Container>
        <LogoLink to="/home" type="logo">
          <Logo>
            <img src="/chef.png" alt="logo" />
            <Title>wannacook</Title>
          </Logo>
        </LogoLink>
        <Nav>
          <Link to="/home">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/favourites">Favourites</Link>
          <Link to="/about">About</Link>
        </Nav>
      </Container>
    </Header>
  );
}

export default Navigation;
