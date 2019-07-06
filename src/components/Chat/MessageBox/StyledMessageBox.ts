import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  background: #eff0f4;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledHeaderMessage = styled.div`
  width: 100%;
  padding: 25px;
  text-align: center;
  border-bottom: 1px solid #707070;
`;

export const StyledHeaderTitle = styled.h2`
  font-size: 1.1rem;
  color: #212121;
  font-weight: 500;
  letter-spacing: 0.7px;
`;

export const StyledMessageContainer = styled.div`
  width: 100%;
  height: auto;
  background: #eff0f4;
  padding: 20px 20px;
`;

export const StyledMessageBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const StyledAvatarBox = styled.div`
  width: 20%;
`;

export const StyledMessageAvatar = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 90px;
  justify-content: flex-start;
`;

export const StyledContentBox = styled.div`
  width: 80%;
  padding: 15px 10px;
  background: #fefefe;
  border-radius: 3px;
  box-shadow: 0px 0px #000000;
`;

export const StyledMessage = styled.p`
  font-size: 1rem;
  color: #212121;
`;

export const StyledEnterMessageBox = styled.div`
  width: 100%;
  background: #ffffff;
  border-top: 1px solid #707070;
  display: flex;
`;

export const StyledEnterMessage = styled.input`
  width: 55%;
  color: #292727;
  padding: 20px 10px;
  letter-spacing: 0.3px;
  background: #ffffff;
  height: 100%;
  outline: none;
  border: none;
`;

export const StyledConfigBtn = styled.button`
  width: 12.5%;
  height: 100%;
  background: #e8e8e8;
  cursor: pointer;
`;

export const StyledSendBtn = styled.button`
  width: 30%;
  height: 100%;
  background: #2a5880;
  color: #ebebeb;
  font-weight: bold;
  text-transform: uppercase;
`;
