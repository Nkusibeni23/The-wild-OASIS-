import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.main`
  padding: 0;
  margin: 0;
  background-color: beige;
  padding: 20px;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check In and Check Out</Heading>
        <Button onClick={() => alert("check in")}>Check In</Button>
        <Button onClick={() => alert("check out")}>Check Out</Button>
        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="number of quests" />
        <Input type="number" placeholder="number of guests" />
      </StyledApp>
    </>
  );
}
