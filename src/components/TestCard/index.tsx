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
  icon: ElementType;
  handleClick?: (event: MouseEvent) => void;
}

function TestCard({ title, subText, description, icon: Icon, handleClick }: TestCardProps) {
  return(
    <Container handleClick={handleClick}>
      <Header>
        <Title>{ title }</Title>
        <SubText>
          <Icon size="20" color="#95A5A6"/>
          {subText}
        </SubText>
      </Header>
      <Description>{ description }</Description>
    </Container>
  );
}


export default TestCard;