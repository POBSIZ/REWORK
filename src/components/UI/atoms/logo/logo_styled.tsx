import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledLogo = styled.span.attrs((props) => ({}))`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const baseColor = Theme.baseTheme.color;
    return css`
      color: ${baseColor};
    `;
  }};
`;

export default StyledLogo;
