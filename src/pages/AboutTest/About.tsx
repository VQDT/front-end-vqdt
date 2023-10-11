import { ReactNode } from "react";


interface SectionProps {
  children:  ReactNode;
}


function About({ children }: SectionProps) {
  return(
    <div>
      { children }
    </div>
  );
}


export default About;