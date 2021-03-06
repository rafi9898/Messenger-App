import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const StyledSearchBox = styled.div`
  width: 25vw;
  height: 100vh;
  max-height: 100vh;
  transition: all 0.3s;

  @media (max-width: 1200px) {
    width: 100vw;
    display: ${(props: IPropsChatBox) => (props.isOpen ? "block" : "none")};
    transition: all 0.3s;
  }
`;

export const StyledMessageBox = styled.div`
  width: 75vw;
  height: 100vh;
  max-height: 100vh;

  @media (max-width: 1200px) {
    display: ${(props: IPropsChatBox) => (props.isOpen ? "none" : "block")};
    width: 100vw;
  }
`;

interface IPropsChatBox {
  isOpen?: any;
}
