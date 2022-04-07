import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledHome = styled.article.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_key_color = Theme.palette.$color_key_color;
    return css`
      min-height: 100vh;
      background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
      h1 {
        margin: 0;
      }
    `;
  }}
`;

export default StyledHome;
