import React from "react";
import {
  StyledWrapper,
  StyledContainer,
  StyledSearch,
  StyledLogoutButton
} from "./SearchStyled";
import PersonsList from "./PersonsList";

const Search = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledSearch type="text" placeholder="Szukaj" />
        <PersonsList name="Anna Nowak" lastMessage="Siemanko co tam sda..." />
        <PersonsList
          name="Bartosz Wieliczka"
          lastMessage="Siemanko co tam sda..."
        />
        <PersonsList
          name="Mikołaj Gerus"
          lastMessage="Siemanko co tam sda..."
        />
      </StyledContainer>
      <StyledLogoutButton>Wyloguj</StyledLogoutButton>
    </StyledWrapper>
  );
};

export default Search;
