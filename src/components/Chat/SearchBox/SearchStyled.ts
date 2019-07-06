import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 100%;
  background: #262b33;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledSearch = styled.input`
  width: 80%;
  border-radius: 90px;
  background: #363d45;
  color: #bfbfbf;
  margin-top: 25px;
  margin: 0 auto;
  outline: none;
  border: none;
  padding: 15px 20px;
  margin-top: 40px;
  margin-bottom: 50px;
  font-size: 1rem;
  box-shadow: 0px 0px 4px #333;
`;

export const StyledPersonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: center;
  padding: 29px 10px 20px 20px;
  cursor: pointer;
  transition: all 0.3s;
  border-bottom: 1px solid #333;

  &:hover {
    background-color: #1e2229;
    transition: all 0.3s;
    box-shadow: 0px 0px #1e2229;
  }
`;

export const StyledActiveIcon = styled.div`
  position: relative;
  top: -15px;
  left: 10px;
  background-color: #3a981e;
  width: 9px;
  height: 9px;
  border-radius: 90px;
`;

export const StyledAvatarBox = styled.div`
  width: 30%;
`;

export const StyledDataPersonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7px;
`;

export const StyledSearchAvatar = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 90px;
  justify-content: flex-start;
`;

export const StyledPersonName = styled.h3`
  font-size: 1rem;
  color: #ebebeb;
  font-weight: 400;
  letter-spacing: 0.7px;
  text-align: left;
  margin: 0;
  margin-bottom: 5px;
`;

export const StyledLastMessage = styled.h4`
  font-size: 0.9rem;
  color: #bbbbbb;
  letter-spacing: 0.4px;
  font-weight: 400;
  text-align: left;
  margin: 0;
`;

export const StyledLogoutButton = styled.button`
  width: 100%;
  padding: 20px 10px;
  background: #4a4a4a;
  color: #ffffff;
  letter-spacing: 0.5px;
  font-weight: 500;
  text-transform: uppercase;
  outline: none;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  width: 25vw;
`;
