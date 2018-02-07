import styled from 'styled-components';


export const MoviesListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: initial;
  padding: 10px;
  & > div {
    height: 280px !important;
    margin: 5px;
  }
`;

export default MoviesListStyled;
