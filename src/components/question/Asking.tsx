interface AskingProps {
  text: string;
}

function  Asking({ text }: AskingProps) {
  return(
    <p className="my-7 text-Midnight font-medium">{ text }</p>
  );
}

export default Asking;