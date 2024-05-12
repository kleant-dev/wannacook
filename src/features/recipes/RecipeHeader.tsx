import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledRecipeHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.6rem;
  transition: all 0.3s;

  & p {
    font-size: 2rem;
    font-weight: 700;
    color: #333;
  }

  & div {
    overflow: hidden;
    padding: 2.4rem 2.4rem 0 2.4rem;
  }

  & img {
    display: block;
    width: 100%;
    border-radius: 1.6rem;
    transition: all 1s;
  }

  & img:hover {
    transform: scale(1.05);
  }

  &:hover {
    background-color: #f1f3f5;
    cursor: pointer;
  }
`;

function RecipeHeader({
  id,
  title,
  image,
}: {
  id: number;
  title: string;
  image: string;
}) {
  const navigate = useNavigate();
  return (
    <StyledRecipeHeader onClick={() => navigate(`/recipes/${id}`)}>
      <div>
        <img src={image} alt={`${title} image`} />
      </div>
      <p>{title}</p>
    </StyledRecipeHeader>
  );
}

export default RecipeHeader;
