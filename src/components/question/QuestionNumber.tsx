interface TitleProps {
  text: string;
}

function QuestionNumber({ text }: TitleProps) {
  return(
    <h3 className="text-Midnight text-base font-medium uppercase">{ text }</h3>
  );
}

export default QuestionNumber;