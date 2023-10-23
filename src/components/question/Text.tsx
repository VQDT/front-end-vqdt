interface TextProps {
  title: string;
  text: string;
}

function Text({ title, text }: TextProps) {
  return(
    <div className="flex flex-col gap-4 ">
      <h4 className="text-Midnight text-base font-bold">{ title }</h4>
      <p className="text-Midnight leading-7">{ text }</p>
    </div>
  );
}

export default Text;