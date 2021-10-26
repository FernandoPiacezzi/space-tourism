import { Topbar } from "../Topbar";
import { Container } from "./styles";

export function DefaultTemplate({ children }) {
  return (
    <Container>
      <Topbar />
      {children}
    </Container>
  )
}
