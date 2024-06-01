import styled from "styled-components";
import FavoritesList from "../features/favourites/FavoritesList";

export const StyledPage = styled.div`
  height: 100vh;
  background-color: #fff9db;
`;
function Favourites() {
  return (
    <StyledPage>
      <FavoritesList />
    </StyledPage>
  );
}

export default Favourites;
