import logo_icon from '../../assets/shared/logo.svg';
import hamburger_icon from '../../assets/shared/icon-hamburger.svg';

import { Container } from "./styles";

export function Topbar() {
  return (
    <Container>
      <img src={logo_icon} alt="" />
      <button className="hamburger__button">
      <img src={hamburger_icon} alt="" />
      </button>
    </Container>
  )
}
