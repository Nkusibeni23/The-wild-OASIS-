import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.main`
  padding: 20px;
`;

export default function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check In and Check Out</Heading>
              <Button
                variation="primary"
                size="medium"
                onClick={() => alert("check in")}
              >
                Check In
              </Button>
              <Button
                variation="secondary"
                size="medium"
                onClick={() => alert("check out")}
              >
                Check Out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="number of quests" />
              <Input type="number" placeholder="number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}
