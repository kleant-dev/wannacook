import styled from "styled-components";

const StyledRecipeHeader = styled.div`
  display: flex;
`;

function RecipeHeader({ title, image }: { title: string; image: string }) {
  return (
    <StyledRecipeHeader>
      <img src={image} alt={`${title} image`} />
      <p>{title}</p>
    </StyledRecipeHeader>
  );
}

export default RecipeHeader;
