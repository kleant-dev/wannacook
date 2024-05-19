import styled from "styled-components";
import { CenteredContainer } from "../../ui/CenteredContainer";

const StyledTestimonials = styled.section`
  padding: 9.2rem 3.2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10rem;
  row-gap: 12.6rem;
  justify-items: center;
  @media (max-width: 66rem) {
    grid-template-columns: 1fr;
    row-gap: 6.4rem;
  }
`;
const Heading = styled.div`
  display: flex;
  justify-content: center;
  & h2 {
    font-size: 6.2rem;
    font-weight: 700;
    color: #333;
    margin: 0 auto;
  }

  @media (max-width: 66rem) {
    & h2 {
      font-size: 3.6rem;
    }
  }
  @media (max-width: 43rem) {
    & h2 {
      font-size: 2.8rem;
    }
  }
`;

const Testimonial = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  & img {
    width: 9.2rem;
    height: 9.2rem;
    border-radius: 50%;
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 1.6rem;
  }

  & p {
    font-size: 2.4rem;
    font-weight: 600;
    color: #333;
  }

  & blockquote {
    font-size: 1.8rem;
    line-height: 1.8;
    color: #333;
    margin: 0;
  }
`;

function Testimonials() {
  return (
    <CenteredContainer color="#fff">
      <Heading>
        <h2>What do our customers say</h2>
      </Heading>
      <StyledTestimonials>
        <Testimonial>
          <img src="/src/data/dave.jpg" alt="dave" />
          <div>
            <p>David R</p>
            <blockquote>
              "Living with dietary restrictions can be challenging, but this app
              has made it much easier for me to find recipes that fit my needs.
              Whether I'm looking for gluten-free, vegan, or low-carb options, I
              can always count on this app to deliver delicious meals."
            </blockquote>
          </div>
        </Testimonial>
        <Testimonial>
          <img src="/src/data/hannah.jpg" alt="hannah" />
          <div>
            <p>Emily L</p>
            <blockquote>
              "This app has been a game-changer for me as a busy mom. With its
              collection of easy-to-follow recipes, I've managed to whip up
              delicious meals that my family loves without spending hours in the
              kitchen.From classics to exotic dishes, it's a food lover's
              paradise."
            </blockquote>
          </div>
        </Testimonial>
        <Testimonial>
          <img src="/src/data/steve.jpg" alt="steve" />
          <div>
            <p>John M.</p>
            <blockquote>
              "I'm a food enthusiast always eager to try new recipes, and this
              app has become my go-to source. Its wide range of culinary
              options, from classic favorites to exotic cuisines, keeps me
              excited about cooking every day."
            </blockquote>
          </div>
        </Testimonial>
        <Testimonial>
          <img src="/src/data/customer-3.jpg" alt="dave" />
          <div>
            <p>Sarah W</p>
            <blockquote>
              "Cooking has never been my strong suit, but thanks to this app,
              I've gained confidence in the kitchen. Its user-friendly interface
              and detailed instructions have helped me create impressive dishes
              that even my friends rave about."
            </blockquote>
          </div>
        </Testimonial>
      </StyledTestimonials>
    </CenteredContainer>
  );
}

export default Testimonials;
