interface TextProps {
  text: string;
}

function Text({text}: TextProps) {
  return(
    <div>
      <p className="text-Midnight text-4xl text-center">{text}</p>
    </div>
  );
}

export default Text;