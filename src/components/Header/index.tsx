import logo from "../../assets/logo.png";
import { RiLogoutBoxLine } from "react-icons/ri";
import Container from "./Container";
import Link from "./Link";
import ListLink from "./ListLink";
import Navigation from "./Navigation";
import Image from "./Image";

function Header() {
  return(
    <Container>
      <Image src={logo} />
      <Navigation>
        <ListLink>
          <Link url="#">PREPARATÓRIO</Link>
          <Link url="#">PROVAS</Link>
          <Link url="#">DADOS PESSOAIS</Link>
          <Link url="#"> <RiLogoutBoxLine size={16}/>SAIR</Link>
        </ListLink>
      </Navigation>
    </Container>
  );
}

export default Header;