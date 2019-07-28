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
`;

export const StyledForm = styled.form`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`;

export const StyledInputLabel = styled.label`
  font-size: 1.1rem;
  color: #212121;
  margin-bottom: 5px;
  margin-top: 20px;
`;

export const StyledTextInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 1rem;
  margin: 0 auto;
  padding: 0px 7px;
`;

export const StyledColorInput = styled.input`
  width: 30%;
  height: 30px;
  margin-bottom: 30px;
`;

export const StyledAddRoomBtn = styled.button`
  width: 80%;
  padding: 17px 7px;
  background-color: #7289da;
  text-transform: uppercase;
  color: #fff;
  margin-top: 20px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 4px #333;
  cursor: pointer;
  margin-bottom: 30px;
  margin: 0 auto;
`;
