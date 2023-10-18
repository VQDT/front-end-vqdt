interface CardTitleProps {
  text: string;
}

function CardTitle({ text }: CardTitleProps) {
  return(
    <h3 className="text-Blue text-xl font-bold text-center">
      { text }
    </h3>
  );
}

export default CardTitle;