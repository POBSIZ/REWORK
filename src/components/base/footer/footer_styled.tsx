import styled, { css } from 'styled-components';

const StyledFooter = styled.footer.attrs((props) => {})`
  ${(props) => {
    const $color_base_black = props.theme.palette.$color_base_black;
    return css`
      min-height: 150px;
      padding: 0 5%;
      box-shadow: 0 0 10px rgba(70, 70, 70, 0.3);
      background-color: ${$color_base_black};
      color: #fff;

      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      .footer-logo {
        font-weight: black;
        font-size: 2.2em;
        line-height: 150px;
      }

      .footer-mid {
        display: flex;
        flex-flow: column;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;

        .footer-copyright {
        }
        .footer-address {
          margin-top: 10px;
        }
      }

      .footer-link {
        a {
          font-size: 35px;
          line-height: 150px;
          padding: 0 10px;
          color: #fff;
        }
      }
    `;
  }};
`;

export default StyledFooter;
