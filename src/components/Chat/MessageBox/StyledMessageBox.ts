import styled from "styled-components";
import { ImageAdd } from "styled-icons/boxicons-regular/ImageAdd";
import { InsertEmoticon } from "styled-icons/material/InsertEmoticon";
import Emoji from "react-emoji-render";
import { Navicon } from "styled-icons/evil/Navicon";

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
  height: 100vh;
`;

export const StyledHeaderMessage = styled.div`
  width: 100%;
  padding: 20px 0px;
  text-align: center;
  border-bottom: 1px solid #707070;
`;

export const StyledNavIcon = styled(Navicon)`
  width: 54px;
  height: 54px;
  color: #333;
  position: absolute;
  top: 15px;
  left: 20px;
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
`;

export const StyledHeaderTitle = styled.h2`
  font-size: 1.1rem;
  color: #212121;
  font-weight: 550;
  letter-spacing: 0.7px;
`;

export const StyledNameFirend = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: ${(props: IStyledMessageProps) =>
    props.mymessage ? "#ECECEC" : "#212121"};
`;

export const StyledMessageContainer = styled.div`
  height: auto;
  background: #eff0f4;
  padding: 20px 70px;
`;

export const StyledMainContentBox = styled.div`
  height: 100%;
  overflow-y: scroll;
`;

export const StyledMessageBox = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: ${(props: IStyledMessageProps) =>
    props.mymessage ? "flex-end" : "flex-start"};
`;

export const Styled404Room = styled.h2`
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-align: center;
`;

export const StyledAvatarBox = styled.div`
  margin-right: 20px;
`;

export const StyledMessageAvatar = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 90px;
  justify-content: flex-start;
`;

export const StyledContentBox = styled.div`
  width: auto;
  padding: 10px 15px;
  background: ${(props: IStyledMessageProps) =>
    props.mymessage ? "#3578E5" : "#fefefe"};
  border-radius: 3px;
  box-shadow: 10px 11px 5px -14px rgba(0, 0, 0, 0.75);
`;

export const StyledMessage = styled(Emoji)`
  font-size: 1rem;
  font-weight: 500;
  display: block;
  color: ${(props: IStyledMessageProps) =>
    props.mymessage ? "#ECECEC" : "#212121"};
`;

export const StyledEnterMessageBox = styled.div`
  width: 100%;
  background: #ffffff;
  border-top: 1px solid #707070;
  height: 66px;
  display: flex;
`;

export const StyledEnterMessage = styled.input`
  width: 60%;
  color: #292727;
  line-height: 66px;
  padding: 0px 15px;
  letter-spacing: 0.3px;
  font-size: 1rem;
  background: #ffffff;
  height: 100%;
  outline: none;
  border: none;
`;

export const StyledConfigBtn = styled.button`
  width: 10%;
  min-height: 100%;
  background: #e8e8e8;
  border: none;
  outline: none;
  border-right: 1px solid #333;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #dedede;
    transition: all 0.3s;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const StyledSendBtn = styled.button`
  width: 20%;
  min-height: 100%;
  background: #2a5880;
  color: #ebebeb;
  font-weight: bold;
  font-size: 1.1rem;
  letter-spacing: 0.4px;
  border: none;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #1e4261;
    transition: all 0.3s;
  }

  @media (max-width: 1200px) {
    width: 40%;
  }
`;

export const ImageAddIcon = styled(ImageAdd)`
  width: 40px;
  color: #000000;
`;

export const InsertEmoticonIcon = styled(InsertEmoticon)`
  width: 40px;
  color: #000000;
`;

interface IStyledMessageProps {
  mymessage?: any;
}
