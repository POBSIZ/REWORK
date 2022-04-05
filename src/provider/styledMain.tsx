import styled, { css } from 'styled-components';

const StyledMain = styled.main.attrs((props) => ({}))`
  ${(props) => {
    return css`
      min-height: 100vh;
      padding-top: 60px;

      @media screen and (max-width: 800) {
        padding-top: 50px;
      }
    `;
  }};
`;

export default StyledMain;
