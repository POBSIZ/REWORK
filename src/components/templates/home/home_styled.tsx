import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledHome = styled.article.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_key_color = Theme.palette.$color_key_color;
    return css``;
  }}
`;

export default StyledHome;
