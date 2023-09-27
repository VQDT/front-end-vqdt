import Button from "../Button"
import {AiOutlineCloseCircle} from 'react-icons/ai'

type Props = {}

function index({}: Props) {
  return (
    <div className="w-screen h-screen bg-[rgba(0,0,0,0.5)]">
        <div className="flex flex-col fixed transform -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%]  w-full bg-white max-w-[528px] justify-center rounded-[20px]">
          <div className=" flex h-[44px] relative text-white bg-primary_red w-full justify-center rounded-t-[20px] items-center font-bold">
              <span>ATENÇÃO</span>
              <AiOutlineCloseCircle onClick={()=>{console.log("teste")}} className=" absolute right-3 w-6 h-6 cursor-pointer" />
          </div>
          <div className="my-5 px-10 ">
            <section className="flex flex-col items-center w-full">
                  <p className="text-xl mb-5">Digite sua senha para encerrar a prova.</p>
                  <input type="password" placeholder="***********" className="w-full max-w-[360px] h-[45px] border border-concrete rounded-[10px] text-xl p-3" />
            </section>
          </div>
          <div className=" flex justify-center gap-[72px] mb-5">
            <div>
              <Button variant="primary">
                VOLTAR
              </Button>
            </div>
            <div>
              <Button variant="alert">
                ENCERRAR
              </Button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default index