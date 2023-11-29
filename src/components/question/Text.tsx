interface TextProps {
  text: string;
}

function Text({ text }: TextProps) {
  return(
    <div className="flex flex-col gap-4 ">
      <p className="text-Midnight leading-7">{ text }</p>
    </div>
  );
}

export default Text;