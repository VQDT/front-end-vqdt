interface AskingProps {
  text: string;
}

function  Asking({ text }: AskingProps) {
  return(
    <p className="text-Midnight font-medium">{ text }</p>
  );
}

export default Asking;