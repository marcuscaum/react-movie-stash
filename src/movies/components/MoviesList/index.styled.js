import styled from 'styled-components';


export const MoviesListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: initial;
  padding: 10px;

  p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  > div {
    height: 280px !important;
    max-width: 173px;
    overflow: hidden;
    margin: 5px;

    > div {
      padding: 15px 15px 0 0;
    }
  }
`;

export default MoviesListStyled;
