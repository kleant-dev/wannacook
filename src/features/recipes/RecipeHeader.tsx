import { useState } from "react";
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
    text-align: center;
    line-height: 1.4;
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
    background-color: #fff3bf;
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
  const [isError, setIsError] = useState(false);
  return !isError ? (
    <StyledRecipeHeader onClick={() => navigate(`/recipes/${id}`)}>
      <div>
        <img
          onError={() => setIsError(true)}
          src={image}
          alt={`${title} image`}
        />
      </div>
      <p>{title}</p>
    </StyledRecipeHeader>
  ) : null;
}

export default RecipeHeader;
