import Container from "./Container";
import Header from "./Header";
import Main from "./Main";
import Text from "./Text";
import Buttons from "./Buttons";
import { ReactNode } from "react";

interface ModalProps {
  title: string;
  text: string;
  variant?: "alert" | "default" | "confirm" | "warning"; 
  children: ReactNode[] | ReactNode;
}

function Modal({ children, title, text, variant = "default" }: ModalProps) {
  return(
    <Container>
      <Header title={title} variant={variant}></Header>
      <Main>
        <Text text={text}/>
        <Buttons>
          { children }
        </Buttons>
      </Main>
    </Container>
  );
}

export default Modal;