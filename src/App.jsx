import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;
const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  text-align: center;
  color: var(--color-brand-600);
  background-color: red;
  border: 1px solid var(--color-brand-600);
  border-radius: 1rem;
  cursor: pointer;
`;

export default function App() {
  return (
    <div>
      <H1>Hello World</H1>
      <Button>Button</Button>
    </div>
  );
}
