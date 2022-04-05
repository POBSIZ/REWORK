import styled, { css } from 'styled-components';
import { GlobalStyleType } from 'StyleVars';

const StyledHome = styled.article.attrs((props) => {})`
  ${(props) => {
    const Theme: GlobalStyleType = props.theme;
    const $color_key_blue = Theme.palette.$color_key_blue;
    return css``;
  }}
`;

export default StyledHome;
