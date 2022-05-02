import React, { useState, useEffect } from "react";
import { StyledButton, StyledContainer, StyledNav } from "./NavBar.styled";
import { Container } from "../styles/Container.styled";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  const PageNavigation = (pageNumber, pageRoute) => {
    setPage(pageNumber);
    navigate(pageRoute);
    sessionStorage.setItem("Nav", JSON.stringify(pageNumber));
  };

  useEffect(() => {
    setPage(
      sessionStorage.getItem("Nav")
        ? JSON.parse(sessionStorage.getItem("Nav"))
        : 1
    );
  }, []);

  return (
    <StyledContainer>
      <Container>
        <StyledNav>
          <StyledButton
            clicked={page === 1 ? 1 : 0}
            onClick={() => PageNavigation(1, "/")}
          >
            Covid Data
          </StyledButton>
          <StyledButton
            clicked={page === 2 ? 1 : 0}
            onClick={() => PageNavigation(2, "/pagination")}
          >
            Pagination Api
          </StyledButton>
          <StyledButton
            clicked={page === 3 ? 1 : 0}
            onClick={() => PageNavigation(3, "/todoapp")}
          >
            To Do App
          </StyledButton>
        </StyledNav>
      </Container>
    </StyledContainer>
  );
};

export default NavBar;
