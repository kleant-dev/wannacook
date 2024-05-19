import { GiKnifeFork } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CenteredContainer } from "../../ui/CenteredContainer";

const StyledHero = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  column-gap: 4.8rem;
  @media (max-width: 90rem) {
    grid-template-columns: 1fr;
    row-gap: 7.4rem;
    margin: 0 auto;
    align-content: center;
  }
`;

const Title = styled.h1`
  font-size: 8.2rem;
  font-weight: 700;
  letter-spacing: 0.3px;
  color: #333;
  margin: 0;
  @media (max-width: 43rem) {
    font-size: 7.2rem;
  }
`;

const HeroContent = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  @media (max-width: 90rem) {
    align-items: center;
    text-align: center;
  }
`;

const HeroImage = styled.div`
  & div {
    overflow: hidden;
    width: 100%;
    padding: 0;
    display: flex;
  }
  & img {
    width: 100%;
    transition: all 1.5s;
  }

  @media (max-width: 900px) {
    & img {
      width: 80%;
    }
    & div {
      justify-content: center;
    }
  }
  @media (max-width: 768px) {
    & img {
      width: 100%;
    }
  }
`;

const Description = styled.p`
  font-size: 2.6rem;
  padding: 3.2rem 0 3.2rem 0;
  font-weight: 400;
  color: #333;
  line-height: 1.8;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  text-transform: uppercase;
  padding: 2.8rem 3.6rem;
  font-weight: 700;
  color: #333;
  font-size: 2.4rem;
  background-color: #fcc419;
  border: none;
  text-decoration: none !important;
  transition: all 0.3s;
  border-radius: 1rem;
  &:hover {
    cursor: pointer;
    background-color: #ffd43b;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
`;

const Customers = styled.div`
  display: flex;
  align-items: center;
  padding: 9.2rem 0 0 0;
  & img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    margin-right: -1.2rem;
    @media (max-width: 43rem) {
      width: 5.4rem;
      height: 5.4rem;
    }
  }
  & p {
    margin-left: 2rem;
    font-size: 1.4rem;
    color: #555;
  }
`;

const Tag = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #f08c00;
  display: inline;
`;

function Hero() {
  return (
    <CenteredContainer>
      <StyledHero>
        <HeroContent>
          <Tag>In the kitchen</Tag>
          <Title>Unlock your inner Masterchef</Title>
          <Description>
            Welcome to wannacook, your ultimate destination for discovering
            delicious recipes to tantalize your taste buds!
          </Description>

          <Link to="/recipes">
            <Button>
              <GiKnifeFork /> Prepare your next meal
            </Button>
          </Link>
          <Customers>
            <img src="/src/data/customer-1.jpg" alt="customer" />
            <img src="/src/data/customer-2.jpg" alt="customer" />
            <img src="/src/data/customer-3.jpg" alt="customer" />
            <img src="/src/data/customer-4.jpg" alt="customer" />
            <img src="/src/data/customer-5.jpg" alt="customer" />
            <p>2000+ people use our recipes daily</p>
          </Customers>
        </HeroContent>
        <HeroImage>
          <div>
            <img src="/src/data/woman-cooking.avif" alt="chef" />
          </div>
        </HeroImage>
      </StyledHero>
    </CenteredContainer>
  );
}

export default Hero;
