interface LocalTitleProps {
  text: string;
}

function LocalTitle({ text }: LocalTitleProps) {
  return(
    <h3 className="text-md font-semibold text-Darker">{ text }</h3>
  );
}

export default LocalTitle;