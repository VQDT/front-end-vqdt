import Button from "../../components/Button";
import bg from "../../assets/home_background.png"
import logo from "../../assets/logo2.png"

function Home() {
    return (
        <div className="w-full h-screen flex justify-center">  
            <div className="w-full min-w-[420px] p-8 bg-white flex- flex justify-center items-center">
                <div className="max-w-[420px] m-auto flex flex-col items-center gap-4">
                    <img src={logo} alt="" width={280}/>
                    <Button variant="primary" type="button" onClick={() => window.location.href = "/login/"}>ENTRAR</Button>
                </div>
            </div>
            <div 
                className="w-full p-8 flex-col gap-8 bg-cover flex justify-center items-center" 
                style={{backgroundImage: `url(${bg})`}}
            >
                <div className="w-full max-w-[600px] m-auto flex flex-col justify-center  gap-8">
                    <h2 className="text-white text-4xl font-semibold">Sobre</h2>
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