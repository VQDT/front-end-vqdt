import Button from "../../components/Button";
import logo from "../../assets/logo2.png"
import "./index.scss";

function Home() {
    return (
        <div className="flex items-center h-screen">  
        {/* left screen: enter and register */}
        <div className="flex flex-col items-center 
        justify-center w-full lg:w-2/5 
        bg-white h-full gap-10 lg:gap-5">
                <div className="max-w-[420px] m-auto flex flex-col items-center gap-4">
                    <img src={logo} alt="" width={280}/>
                    <Button variant="primary" type="button" onClick={() => window.location.href = "/login/"}>ENTRAR</Button>
                </div>
        </div>
        {/* right screen: about the system */}
        <div 
                className="hidden lg:flex flex-col items-center
                justify-center w-3/5 landing bg-[--blue] h-full"
            >
                <div className="w-full max-w-[600px] m-auto flex flex-col justify-center gap-8">
                    <h2 className="text-white text-4xl font-semibold">SOBRE O PROGRAMA</h2>
                    <p className="text-secondary text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate, nisi semper eleifend fringilla, libero risus porta erat, id tincidunt leo sapien ornare massa. Nunc non lacus accumsan ipsum consectetur ornare. Nulla vel mi eros. Donec lobortis vel mauris a volutpat. Cras a fringilla felis, ac tempor lacus. Quisque et elit eros. Praesent eu viverra eros. Vestibulum eu ligula porttitor, vulputate metus placerat, dictum quam.</p>
                    <div className="w-max">
                        <Button variant="secondary" >SAIBA MAIS</Button>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Home;