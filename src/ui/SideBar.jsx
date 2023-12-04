import styled from "styled-components";

import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  padding: 3.2rem 2.4rem;
  background-color: var(--color-grey-50);
  border-right: 1px solid var(--color-grey-200);

  grid-row: 1/ -1;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export default function SideBar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}
