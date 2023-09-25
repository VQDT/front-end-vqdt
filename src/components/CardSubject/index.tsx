import React from "react";

interface ICardSubjectProps {
  name: string;
  img: string;
}

const CardSubject: React.FC<ICardSubjectProps> = ({ name, img }) => {
  // Your component code here, you can use name and img in your component
  return (
    <div className="flex flex-col h-[200px] w-[270px] border border-[#C5C5C5] rounded justify-center items-center shadow-md">
      <img className="h-[140px] w-[250px] rounded" src={img} alt={name} />
      <h3 className="text-xl mt-2">{name}</h3>
    </div>
  );
};
export default CardSubject;
