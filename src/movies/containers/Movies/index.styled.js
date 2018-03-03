import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';

export const AppBarStyled = styled(AppBar)`
  background-color: #2d2d2d !important;
  padding-bottom: 13px;

  button {
    &:first-child {
      height: 50px !important;
      border-radius: 10px;
      background: #666 !important;
      margin: 15px -10px 0px -10px !important;
      svg {
        fill: white !important;
      }
    }
  }
`;
