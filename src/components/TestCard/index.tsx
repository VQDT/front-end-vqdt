import { ElementType, MouseEvent } from "react";
import Container from "./Container";
import Header from "./Header";
import Title from "./Title";
import Description from "./Description";
import SubText from "./SubText";

interface TestCardProps {
  title: string;
  subText: string;
  description: string;
  variant?: "default" | "confirm" | "warning" | "alert";
  icon: ElementType;
  handleClick?: (event: MouseEvent) => void;
}

function TestCard({ title, subText, description, variant = "default", icon: Icon, handleClick }: TestCardProps) {
  return(
    <Container handleClick={handleClick}>
      <Header>
        <Title>{ title }</Title>
        <SubText variant={variant}>
          <Icon size="20"/>
          {subText}
        </SubText>
      </Header>
      <Description>{ description }</Description>
    </Container>
  );
}


export default TestCard;