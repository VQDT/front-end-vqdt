import { useEffect, useState } from "react";
import classes from "./questionCard.module.css";

interface QuestionData {
  number: string;
  subject: string;
  img: string;
  title: string;
  description: {
    text: string;
    reference: string;
  };
  question: string;
  choices: {
    text: string;
    img: string;
  }[];
}

interface QuestionDataProps {
  data: QuestionData;
}

function QuestionCard(props: QuestionDataProps) {

  

  const { data } = props;

  const [isImg, setIsImg] = useState<boolean>(false);
  useEffect (() => {
    if (data.choices[0].img !== "" && !isImg) {
      setIsImg(true);
    }
  }, []);

  const [selectedOption, setSelectedOption] = useState<number>(-1);

  const handleRadioChange = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <section className="p-7">
      <header className="flex justify-between mb-6">
        <h2 className="text-midnight font-medium">QUESTÃO {data.number}</h2>
        <div className="flex text-concrete font-light">
          <h2>#</h2>
          <h2>{data.subject}</h2>
        </div>
      </header>
      <div className="flex justify-center mb-6">
        {data.img !== "" ? (
          <img className="max-w-[600px]" src={data.img} />
        ) : null}
      </div>

      <div>
        <h3 className="mb-9 text-midnight font-bold">{data.title}</h3>
        <div className="text-midnight flex flex-col gap-9">
          <p className="text-justify">{data.description.text}</p>
          <span className="font-sm text-right">
            {data.description.reference}
          </span>
        </div>
        <p className="my-5 text-midnight font-medium">{data.question}</p>
        <div className={isImg ? "flex flex-wrap justify-left gap-10" :"flex flex-col gap-2"}>
          {data.choices.map((choice, index) =>
            choice.img === "" ? (
              <label key={index} className="font-sm text-midnight flex">
                <input
                  type="radio"
                  className={classes.roundedCheckbox}
                  name={data.number}
                  value={index}
                />
                <span>{choice.text}</span>
              </label>
            ) : (
              <div
                className={
                  index !== selectedOption
                    ? classes.imgCheckbox
                    : classes.imgChecked
                }
              >
                <label key={index} onClick={() => handleRadioChange(index)}>
                  <input name={data.number} value={index} />
                  <img src={choice.img} />
                </label>
              </div>
            )
          )}
          
        </div>
      </div>
    </section>
  );
}

export default QuestionCard;
