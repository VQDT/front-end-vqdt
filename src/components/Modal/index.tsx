import Button from "../Button"
import { AiOutlineCloseCircle } from 'react-icons/ai'

interface ButtonProps {
  label: string;
  variant: "primary" | "alert"| "close";
  icon?: any; // você pode substituir 'any' pelo tipo correto para os ícones
}

interface Props  {
  title: "ATENÇÃO"| "AGUARDE";
  bg_color: string;
  content: string;
  input?: boolean;
  buttons: ButtonProps[];
  closeModal?: any;
}

const inputtemplate = () => (
  <input type="password" placeholder="***********" className="w-full max-w-[360px] h-[45px] border border-concrete rounded-[10px] text-xl p-3" />
)


function index({title, bg_color , content , input, buttons, closeModal}: Props) {
  
  return (
    <div className="w-screen h-screen bg-[rgba(0,0,0,0.5)] fixed transform -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] ">
        <div className="flex flex-col fixed transform -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%]  w-full bg-white max-w-[528px] justify-center rounded-[20px]">
          <div className={` flex h-[44px] relative text-white ${bg_color} w-full justify-center rounded-t-[20px] items-center font-bold`}>
              <span>{title}</span>
              <AiOutlineCloseCircle onClick={()=>{closeModal()}} className=" absolute right-3 w-6 h-6 cursor-pointer" />
          </div>
          <div className="my-5 px-10 ">
            <section className="flex flex-col items-center w-full">
                  <p className="text-xl mb-5 text-center">{content}</p>
                  {input && inputtemplate()}
            </section>
          </div>
          <div className=" flex justify-center gap-[72px] mb-5">
            
            {buttons.map((button, index) => (
              <div key={index} className="flex justify-center gap-[72px] mb-5">
                <Button variant={button.variant} iconLeft={button.icon}>
                  {button.label}
                </Button>
              </div>
            ))}
        
          </div>
      </div>
    </div>
  )
}

export default index