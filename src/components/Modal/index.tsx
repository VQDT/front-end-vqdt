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
  buttons: ReactNode[] | ReactNode,
  inputs: ReactNode[] | ReactNode
}

function Modal({ title, text, variant = "default", buttons, inputs }: ModalProps) {
  return(
    <Container>
      <ModalContainer >
        <Header title={title} variant={variant}></Header>
        <Main >
          <Text text={text}/>
          <div className="w-full max-w-[400px] m-auto">
            {inputs}
          </div>
          <Buttons>
            {buttons}
          </Buttons>
        </Main>
      </ModalContainer>
    </Container>
  );
}

export default Modal;