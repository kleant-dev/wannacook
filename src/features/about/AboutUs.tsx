/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import { CenteredContainer } from "../../ui/CenteredContainer";

const Title = styled.h3`
  margin: 0 auto;
  font-size: 4.3rem;
`;

const StyledAboutUs = styled.div`
  display: flex;
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
      </Content>
    </CenteredContainer>
  );
}

export default AboutUs;
