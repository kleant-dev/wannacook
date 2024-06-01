import styled from "styled-components";
import { CenteredContainer } from "../../ui/CenteredContainer";

const Title = styled.h3`
  margin: 0 auto;
  font-size: 4.3rem;
`;

const Header = styled.div`
  display: flex;
`;

const Label = styled.p`
  font-size: 3.2rem;
  font-weight: 600;
`;

const Content = styled.div`
  padding: 4.8rem 0;
`;

const Text = styled.p`
  font-size: 2.4rem;
  line-height: 1.8;
`;

const Developer = styled.p`
  text-align: center;
  & span {
    color: #f08c00;
    font-weight: 600;
  }
`;

function AboutUs() {
  return (
    <CenteredContainer>
      <Header>
        <Title>About Us</Title>
      </Header>

      <Content>
        <Label>Our Mission</Label>
        <Text>
          At Recipe Finder, our mission is to make cooking enjoyable,
          accessible, and hassle-free for everyone. Whether you're a seasoned
          chef or a kitchen novice, our app provides a wealth of culinary
          inspiration to suit every palate and dietary preference.
        </Text>
        <Developer>
          Developed by <span>Bajraktari Solutions</span>
        </Developer>
      </Content>
    </CenteredContainer>
  );
}

export default AboutUs;
