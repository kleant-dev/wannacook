import { CiSearch } from "react-icons/ci";
import styled from "styled-components";
import { useRecipesContext } from "../../context/RecipesContext";
import { useState } from "react";

const StyledSearch = styled.div`
  padding: 4.6rem 0 0 0;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  font-size: 2.4rem !important;
  width: 60rem;
  height: 6.2rem;
  font-size: 1.8rem;
  padding: 0 1.2rem;
  border: none;
  outline: 2px solid var(--primary-color);
  outline-offset: 0.5rem;
  border-radius: 0.8rem;
  background-color: var(--background-color);
  @media (max-width: 50rem) {
    width: 50rem;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    font-size: 3.2rem;
    font-weight: 600;
    color: #333;
    letter-spacing: 0.8px;
  }
`;
const Form = styled.form`
  position: relative;

  & button {
    border: none;
    background: none;
    position: absolute;
    right: 1.2rem;
    top: 0.6rem;
    cursor: pointer;
  }
`;

function Search() {
  const [query, setQuery] = useState<string>("");
  const { dispatch } = useRecipesContext();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({ type: "setQuery", payload: query });
    setQuery("");
  }
  return (
    <StyledSearch>
      <Header>
        <p>Search for recipes</p>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="e.g. Pasta with tomato sauce"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <button>
            <CiSearch size={32} />
          </button>
        </Form>
      </Header>
    </StyledSearch>
  );
}

export default Search;
