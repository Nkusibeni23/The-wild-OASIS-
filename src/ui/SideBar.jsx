import styled from "styled-components";

const StyledSidebar = styled.aside`
  padding: 3.2rem 2.4rem;
  background-color: var(--color-grey-50);
  border-right: 1px solid var(--color-grey-200);

  grid-row: 1/ -1;
`;

export default function SideBar() {
  return <StyledSidebar>SIDEBAR</StyledSidebar>;
}
