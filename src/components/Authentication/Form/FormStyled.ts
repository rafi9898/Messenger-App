import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
  width: auto;
  min-width: 40%;
  height: auto;

  @media (max-width: 1000px) {
    min-width: 80%;
  }

  @media (orientation: landscape) {
    min-width: 100vw;
    overflow: scroll;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: #36383f;
  box-shadow: 0px 0xp 4px #333;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const StyledFormTitle = styled.h2`
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: bold;
  color: #f9f9f9;
  margin: 0;

  @media (max-width: 1000px) {
    font-size: 1.3rem;
  }
`;

export const StyledFormSubTitle = styled.p`
  font-size: 1.1rem;
  color: #c7c7c7;
  letter-spacing: 0.4px;
  margin-top: 5px;

  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const StyledFlex = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 30px 50px;

  @media (orientation: landscape) {
    padding: 70px 50px 30px 50px;
  }
`;

export const StyledLabel = styled.label`
  font-size: 1.2rem;
  color: #c7c7c7;
  letter-spacing: 0.4px;
  font-weight: 500;
  text-align: left;
  margin-bottom: 5px;

  @media (max-width: 1000px) {
    font-size: 1.1rem;
  }
`;

export const StyledInput = styled.input`
  width: 97%;
  height: 45px;
  margin: 0 auto;
  background-color: #2e3037;
  box-shadow: 0px 0px 4px #333;
  margin-bottom: 20px;
  border: none;
  padding-left: 3%;
  color: #ddd;
  font-size: 1rem;
`;

export const StyledButton = styled.button`
  width: 100%;
  margin-top: 25px;
  background-color: #7087dd;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.3rem;
  padding: 20px 10px;
  cursor: pointer;
  border: none;
  box-shadow: 0px 0px 4px #333;
  transition: all 0.3s;

  @media (max-width: 1000px) {
    font-size: 1.1rem;
    padding: 13px 10px;
  }

  &:hover {
    transition: all 0.3s;
    background-color: #5c71bf;
  }
`;

export const StyledAnotherLink = styled(Link)`
  font-size: 1.2rem;
  text-decoration: none;
  color: #81c0ff;
  letter-spacing: 0.4px;
  font-weight: 500;
  margin-top: 10px;

  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;
