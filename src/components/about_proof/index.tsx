import { BsCalendar4 } from 'react-icons/bs'
import { MdOutlineWatchLater, MdOutlinePsychology, MdOutlineScience, MdMenuBook } from 'react-icons/md'
import { PiMathOperationsBold } from 'react-icons/pi'
import Button from "../Button"
 
type Props = {}

function index({}: Props) {
  return (
    <div className=" flex flex-col w-full h-full p-8 bg-white  md:w-[90%] md:rounded-[10px] md:border md:border-concrete xl:w-[70%] xl:h-[550px] 2xl:w-[60%] 2xl:h-[750px]">
      <div className="flex flex-col justify-center items-center md:flex-row  md:bg-[#EEF1F4] md:h-[73px] rounded-[10px] md:justify-between mb-[50px]">
        <div className="flex justify-center w-[350px] h-[50px] mb-2  rounded-[5px] items-center bg-primary md:w-[250px] md:rounded-none md:m-0 md:rounded-l-lg md:rounded-br-[20px]  md:h-full lg:w-[350px] ">
          <h1 className="text-white font-bold text-[15px] xl:text-[25px] 2xl:text-[30px]  ">EXAME SUPLETIVO</h1>
        </div>
        <div className="flex items-center gap-9 xl:ml-[150px] xl:gap-9">
          <div className="flex items-center gap-1" >
            <BsCalendar4 className="w-[18px] h-[18px] 2xl:w-[30px] 2xl:h-[30px] text-concrete" />
            <h2 className="text-primary text-[15px] font-bold 2xl:text-[25px]">19/07/2023</h2>
          </div>
          <div className="flex items-center gap-1" >
            <MdOutlineWatchLater className="w-[25px] h-[25px] 2xl:w-[30px] 2xl:h-[30px] text-concrete" />
            <h2 className="text-primary text-[15px] font-bold md:mr-2 2xl:text-[25px]">08:00 - 12:00</h2>
          </div>
        </div>

      </div>
      <div className="mb-[50px]">
        <h2 className="font-bold text-primary mb-10 text-[15px] 2xl:text-[23px] ">Sobre a prova</h2>
        <p className="text-justify text-midnight text-[13px] 2xl:text-[20px]">Duis ultricies in ex ut dignissim. Etiam viverra porta lectus quis blandit. Nam gravida arcu sit amet urna auctor fringilla. Ut urna massa, semper vel nisl quis, ornare consequat ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare, dolor sit amet tempor auctor, massa nunc dictum justo, vitae pellentesque lacus nisi sit amet mauris. Nunc aliquam pharetra condimentum. Quisque venenatis orci eu neque ultrices, non auctor augue viverra. Donec faucibus odio vel magna tincidunt, ut porttitor dolor accumsan. Aliquam tincidunt molestie nisl, at auctor velit.</p>
      </div>
      <div className="flex flex-col mb-[110px] xl:flex-row xl:mb-[30px] ">
        <div className="whitespace-normal xl:w-[50%] xl:mr-10 ">
          <h3 className="text-primary font-bold text-[15px] mb-3 2xl:text-[23px]">Local de aplicação da prova </h3>
          <h3 className= "text-midnight font-bold text-[13px] 2xl:text-[20px]">ESCOLA ESTADUAL ALFREDO GASPAR DE MENDONCA</h3>
          <h3 className="text-midnight text-justify text-[13px] mb-3 2xl:text-[20px]">Eustáquio Gomes, Ao lado da antiga Telasa, R. K Um,  S/N - Cidade Universitária, Maceió - AL, 57072-000</h3>
        </div>
        <div className="xl:w-[50%] mb-[10px] ">
          <h3 className="text-primary font-bold mb-3 text-[15px] 2xl:text-[23px]">Conteúdo da prova</h3>
          <div className="flex gap-10">
            <div>
              <h3 className= "text-[#545F71] flex items-center font-bold mb-2 text-[13px] 2xl:text-[20px]"> <PiMathOperationsBold className="w-[20px] h-[20px] 2xl:w-[30px] 2xl:h-[30px]"/>Matemática</h3>
              <h3 className= "text-[#545F71] flex items-center font-bold text-[13px] 2xl:text-[20px]"> <MdOutlinePsychology className="w-[20px] h-[20px] transform scale-x-[-1] 2xl:w-[30px] 2xl:h-[30px]"/>Ciências Humanas</h3>
            </div>
            <div>
              <h3 className= "text-[#545F71] flex items-center font-bold mb-2 text-[13px] 2xl:text-[20px]"> <MdOutlineScience className="w-[20px] h-[20px] 2xl:w-[30px] 2xl:h-[30px]"/>Ciências da Natureza</h3>
              <h3 className= "text-[#545F71] flex items-center font-bold text-[13px] 2xl:text-[20px]"> <MdMenuBook className="w-[20px] h-[20px] transform scale-x-[-1] 2xl:w-[30px] 2xl:h-[30px]"/>Linguagens</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8 justify-between">
        <Button variant="alert" classes="text-[14px] h-[50px] xl:w-[230px] ">CANCELAR AGENDAMENTO</Button>
        <Button variant="primary" classes="text-[14px] h-[50px] xl:w-[150px]">REALIZAR PROVA</Button>
      </div>
    </div>
  )
}

export default index