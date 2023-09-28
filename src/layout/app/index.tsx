import { Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BiExit } from "react-icons/bi"

function Layout() {

  return (
    <>
      <header className="w-full h-[63px] bg-[#108ABD]">
        <div className="w-full  m-auto flex justify-between items-center">
          <div className="bg-white py-[5.5px] pl-5 pr-5 rounded-tr-xl">
            <img src={logo} className="h-[52px]" />
          </div>
          <nav className="ml-auto mr-4">
            <ul className="pr-4 flex items-center gap-8">
              <li className="text-white text-lg font-medium hover:text-white h-[63px] border-r pr-8 flex items-center">
                <a
                  href="/app/agendamento"
                  className="py-2 transition-colors hover:border-b-4 hover:border-white"
                >
                  PREPARATÓRIOS
                </a>
              </li>
              <li className="text-white text-lg font-medium hover:text-white h-[63px] border-r pr-8 flex items-center">
                <a
                  href="/app/provas"
                  className="py-2 transition-colors hover:border-b-4 hover:border-white"
                >
                  PROVAS
                </a>
              </li>
              <li className="text-white text-lg font-medium hover:text-white h-[63px] border-r pr-8 flex items-center">
                <a
                  href="/app/dados-pessoais"
                  className="py-2 transition-colors hover:border-b-4 hover:border-white"
                >
                  DADOS PESSOAIS
                </a>
              </li>
            </ul>
          </nav>
          <button className="text-white text-lg font-medium hover:text-white h-[63px] pr-8 flex items-center">
            <span className="flex py-2 transition-colors hover:border-b-4 hover:border-white">{<BiExit/>} SAIR</span>
          </button>
        </div>
      </header>
      <main className="w-full max-w-[1200px] m-auto py-8">
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default Layout;
