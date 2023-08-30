import { AiFillIdcard, AiFillInfoCircle } from "react-icons/ai";
import TextField from "../../components/TextField";
import Button from "../../components/Button";


function Cpf() {

    return (
      <form action="#" method="post" className="w-full p-4 bg-white rounded flex flex-col gap-4">
        <h2 className="text-2xl font-medium text-gray-700">Login</h2>
        <div>
            <div>
              <TextField.Root>
                <TextField.Label>CPF</TextField.Label>
                <TextField.BoxIcon>
                  <TextField.Icon icon={AiFillIdcard}/>
                  <TextField.Input type="text" placeholder="Informe seu CPF"/>
                </TextField.BoxIcon>
                <TextField.Message>
                  <TextField.Icon icon={AiFillInfoCircle}/>
                  Digite apenas números
                </TextField.Message>
              </TextField.Root>
            </div>
        </div>
        <div>
            <Button variant="primary" type="submit">Próximo</Button>
        </div>
      </form>
    );
  }

  export default Cpf;