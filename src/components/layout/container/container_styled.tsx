import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledContainer = styled.div.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $tablet_max_width = Theme.media.$tablet_max_width;
    return css`
      padding: 0 5%;

      @media screen and (max-width: ${$tablet_max_width}) {
        /* padding: 0 3%; */
      }
    `;
  }};
`;

export default StyledContainer;
