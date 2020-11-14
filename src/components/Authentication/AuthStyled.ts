import styled from "styled-components";
import BackgroundAuth from "../../assets/background-auth.jpg";

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
background-image: url('${BackgroundAuth}');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
