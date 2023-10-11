interface SectionContentProps {
  text: string;
}

function AboutContent({ text }: SectionContentProps) {
  return(
    <p className="text-base text-Darker">{ text }</p>
  );
}

export default AboutContent;