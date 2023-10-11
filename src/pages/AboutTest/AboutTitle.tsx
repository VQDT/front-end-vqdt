interface SectionTitleProps {
  text: string;
}

function AboutTitle({ text }: SectionTitleProps) {
  return(
    <h2 className="mb-2 text-xl font-bold text-Blue">{text}</h2>
  );
}

export default AboutTitle;