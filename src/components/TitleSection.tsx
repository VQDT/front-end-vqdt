/* eslint-disable @typescript-eslint/no-unused-vars */

interface TitleSctionProps{
  title:string;
  underline?: boolean;
}

export function TitleSection({title, underline}: TitleSctionProps) {
  return(
    <>

    <h2 className={`text-sky-600 font-semibold text-xl uppercase ${underline? 'border-b-2 pb-1 border-sky-600':''}`}>
      {title}
    </h2>
    </>

  );
}