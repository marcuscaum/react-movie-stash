import styled from 'styled-components';
import { GridTile } from 'material-ui/GridList';

const MoviesListItemStyled = styled(GridTile)`
  display: ${props => (props.image ? ' block !important' : 'none !important')};
`;

export default MoviesListItemStyled;
