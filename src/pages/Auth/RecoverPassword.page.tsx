import Input from "../../components/Input";
import Button from "../../components/Button";
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { AiOutlineQuestionCircle }  from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

function RecoverPassword(){
    const navigate = useNavigate()
    return(
        <div className="bg-[#108ABD] w-full h-screen px-3">
            <div className="flex justify-center content-center w-full h-screen flex-wrap">
                <div>
                    <form className="bg-white w-full rounded-xl p-10 justify-center content-center">
                        <div className="flex items-center">
                            <div className="mr-10">
                                <button onClick={() => navigate("/login")}><AiOutlineArrowLeft size="2em" color="#666666"/></button>
                            </div>
                            <div className="mr-10">
                                <p className="text-4xl font-medium">Recuperar Senha</p>
                            </div>
                            <div>
                                <button><AiOutlineQuestionCircle size="2em" color="#666666"/></button>
                            </div>
                        </div>
                        <div className="text-center mb-6 mt-6">
                            <h2 className="text-[#333333] text-lg">Informe seu CPF e clique em recuperar.</h2>
                            <h2 className="text-[#333333] text-lg">Você receberá um e-mail para gerar uma nova senha.</h2>
                        </div>
                        <div className="mb-2">
                            <h2 className="text-[#333333] text-lg">CPF</h2>
                            <Input
                                placeholder="INFORME SEU CPF"
                                type="text"
                                id="cpf"
                                minLength={11}
                                maxLength={14}
                                required
                                className="text-[#666]"
                            />
                        </div>
                        <div className="mt-3">
                            <Button size="w-full" type="submit">Recuperar Senha</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default RecoverPassword;