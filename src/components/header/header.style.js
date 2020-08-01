import styled from "styled-components";

const HeaderStyleWrapper = styled.div`
  .site-layout-sub-header-background {
    background: #001529;
  }
  .site-layout-sub-header-background p {
    text-align: center;
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 417px) {
    .site-layout-sub-header-background p {
      text-align: center;
      color: #fff;
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;
export default HeaderStyleWrapper;
