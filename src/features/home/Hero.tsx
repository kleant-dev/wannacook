import { GiKnifeFork } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CenteredContainer } from "../../ui/CenteredContainer";

const StyledHero = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
  column-gap: 4.8rem;
`;

const Title = styled.h1`
  font-size: 8.2rem;
  font-weight: 700;
  letter-spacing: 0.3px;
  color: #333;
  margin: 0;
`;

const HeroContent = styled.div`
  padding: 0;
`;

const HeroImage = styled.div`
  & div {
    overflow: hidden;
  }
  & img {
    width: 100%;
    transition: all 1.5s;
  }
  & img:hover {
    transform: scale(1.05);
  }
`;

const Description = styled.p`
  font-size: 3.2rem;
  padding: 3.2rem 0 3.2rem 0;
  font-weight: 400;
  color: #333;
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
  }
  & p {
    margin-left: 2rem;
    font-size: 1.8rem;
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
            10000+ recipes featuring salads, soups deserts and more
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
