import { BsCalendar4 } from 'react-icons/bs'
import { MdOutlineWatchLater, MdOutlinePsychology, MdOutlineScience, MdMenuBook } from 'react-icons/md'
import { PiMathOperationsBold } from 'react-icons/pi'
 
type Props = {}

function index({}: Props) {
  return (
    <div className="flex justify-center ">
      <div className=" flex flex-col w-full max-w-[1200px] bg-white h-[760px] rounded-[10px] p-8 gap-y-8">
        <div className="flex  bg-[#EEF1F4] h-[83px] rounded-[10px] gap-[150px] ">
          <div className="flex justify-center items-center rounded-l-lg rounded-br-lg bg-primary w-[415px] ">
            <h1 className="text-white text-[30px] font-bold ">EXAME SUPLETIVO</h1>
          </div>
          <div className="flex items-center ml-[150px] gap-9">
            <div className="flex items-center gap-1" >
              <BsCalendar4 className="w-[30px] h-[30px] text-concrete" />
              <h2 className="text-primary text-[20px] font-bold">19/07/2023</h2>
            </div>
            <div className="flex items-center gap-1" >
              <MdOutlineWatchLater className="w-[35px] h-[35px] text-concrete" />
              <h2 className="text-primary text-[20px] font-bold">08:00 - 12:00</h2>
            </div>
          </div>

        </div>
        <div>
          <h2 className="font-bold text-primary mb-10">Sobre a prova</h2>
          <p className="text-justify text-midnight">Duis ultricies in ex ut dignissim. Etiam viverra porta lectus quis blandit. Nam gravida arcu sit amet urna auctor fringilla. Ut urna massa, semper vel nisl quis, ornare consequat ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare, dolor sit amet tempor auctor, massa nunc dictum justo, vitae pellentesque lacus nisi sit amet mauris. Nunc aliquam pharetra condimentum. Quisque venenatis orci eu neque ultrices, non auctor augue viverra. Donec faucibus odio vel magna tincidunt, ut porttitor dolor accumsan. Aliquam tincidunt molestie nisl, at auctor velit.</p>
        </div>
        <div className="flex ">
          <div className="whitespace-normal w-[50%] mr-10 ">
            <h3 className="text-primary font-bold mb-3">Local de aplicação da prova </h3>
            <h3 className= "text-midnight font-bold">ESCOLA ESTADUAL ALFREDO GASPAR DE MENDONCA</h3>
            <h3 className="text-midnight text-justify">Eustáquio Gomes, Ao lado da antiga Telasa, R. K Um,  S/N - Cidade Universitária, Maceió - AL, 57072-000</h3>
          </div>
          <div className='w-[50%]'>
            <h3 className="text-primary font-bold mb-3 ">Conteúdo da prova</h3>
            <div className="flex gap-10">
              <div>
                <h3 className= "text-[#545F71] flex items-center font-bold mb-3"> <PiMathOperationsBold className="w-[30px] h-[30px]"/>Matemática</h3>
                <h3 className= "text-[#545F71] flex items-center font-bold"> <MdOutlinePsychology className="w-[30px] h-[30px] transform scale-x-[-1]"/>Ciências Humanas</h3>
              </div>
              <div>
                <h3 className= "text-[#545F71] flex items-center font-bold mb-3"> <MdOutlineScience className="w-[30px] h-[30px]"/>Ciências da Natureza</h3>
                <h3 className= "text-[#545F71] flex items-center font-bold"> <MdMenuBook className="w-[30px] h-[30px] transform scale-x-[-1]"/>Linguagens</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index