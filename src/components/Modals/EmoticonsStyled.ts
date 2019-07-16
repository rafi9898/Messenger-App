import styled from "styled-components";
import { Close } from "styled-icons/evil/Close";

export const StyledContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 20px;
`;

export const StyledCloseBtn = styled(Close)`
  width: 29px;
  height: 29px;
  color: #333;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 15px;
`;

export const StyledHeaderTitle = styled.h2`
  font-size: 1.1rem;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledSpan = styled.p`
  font-size: 1.1rem;
  color: #333;
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
`;
