import { AiFillInfoCircle, AiOutlineUser } from "react-icons/ai";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import DateField from "../../components/DateField";


function RecoverPassword() {

    return (
      <form action="#" method="post" className="w-full p-4 bg-white rounded flex flex-col gap-4">
        <h2 className="text-2xl font-medium text-gray-700">Recuperar Senha</h2>
        <div>
            <div>
              <TextField.Root>
                <TextField.Label>Nome Completo</TextField.Label>
                <TextField.BoxIcon>
                  <TextField.Icon icon={AiOutlineUser}/>
                  <TextField.Input type="text" placeholder="Informe seu nome completo"/>
                </TextField.BoxIcon>
                <TextField.Message>
                  <TextField.Icon icon={AiFillInfoCircle}/>
                  Digite apenas letras
                </TextField.Message>
              </TextField.Root>

              <DateField.Root>
                <DateField.Title>Data de Nascimento</DateField.Title>
                <DateField.Input></DateField.Input>
              </DateField.Root>
            </div>
        </div>
        <div>
            <Button variant="primary" type="submit">Próximo</Button>
        </div>
      </form>
    );
  }

  export default RecoverPassword;