import { Outlet } from "react-router-dom";
import Avatar from "../../components/Avatar";
import logo from "../../assets/logo.png";

function Layout() {
    return(
        <>
            <header className="w-full h-max p-4 bg-white">
                <div className="w-full max-w-[1200px] m-auto flex justify-between items-center">
                    <img src={logo} className="h-[52px]"/>
                    <nav className="ml-auto mr-8">
                        <ul className="pr-4 flex items-center gap-8">
                            <li className="text-gray-600 text-lg font-medium hover:text-primary">
                                <a href="/app/agendamento" className="py-2 transition-colors hover:border-b-4 hover:border-primary">Agendamento</a>
                            </li> 
                            <li className="text-gray-600 text-lg font-medium hover:text-primary">
                                <a href="/app/provas" className="py-2 transition-colors hover:border-b-4 hover:border-primary">Provas</a>
                            </li>
                            <li className="text-gray-600 text-lg font-medium hover:text-primary">
                                <a href="/app/dados-pessoais" className="py-2 transition-colors hover:border-b-4 hover:border-primary">Dados Pessoais</a>
                            </li>
                        </ul>
                    </nav>
                    <Avatar url="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"/>
                </div>
            </header>
            <main className="w-full max-w-[1200px] m-auto py-8">
                <Outlet></Outlet>
            </main>
        </>
    );
}

export default Layout;