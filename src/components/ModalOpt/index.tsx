import { ReactNode } from "react";
import Container from "./Container";
import Header from "./Header";
import ModalContainer from "./ModalContainer";
import Main from "./Main";
import Buttons from "./Buttons";
import Text from "./Text";

interface ModalProps {
  title: string;
  text: string;
  variant?: "alert" | "default" | "confirm" | "warning"; 
  children?: ReactNode[] | ReactNode;
}

function Modal({ children, title, text, variant = "default" }: ModalProps) {
  return(
    <Container>
      <ModalContainer >
        <Header title={title} variant={variant}></Header>
        <Main >
          <Text text={text}/>
          <Buttons>
            { children }
          </Buttons>
        </Main>
      </ModalContainer>
    </Container>
  );
}

export default Modal;