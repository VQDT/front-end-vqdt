import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginInput, LoginInputSchema } from "../models/User";
import MaskedInput from "react-text-mask";
import GOV from "../assets/GOV.png";
import VQDT from "../assets/VQDT.png";
import useAuth from "../context/auth/useAuth";
import { Link } from "react-router-dom";
import ErroAlert from "../components/ErrorAlert";

function LoginPage() {

  const { login, error } = useAuth();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(LoginInputSchema),
  });
  
  const cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
  const submitLogin = (data: LoginInput) => {
    login(data.cpf.replace(/[^\d]/g, ""), data.password)
  };
  
  return (

    <div className="w-full max-w-xs">
      {
        error && <ErroAlert/>
      }
      <img src={VQDT} className="max-w-full mx-auto mb-7" />
      <form
        className="w-full p-6 bg-White rounded-xl flex flex-col gap-3"
        onSubmit={handleSubmit(submitLogin)}
      >
        <div className="flex flex-col">
          <Controller 
            name="cpf"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <MaskedInput
                mask={cpfMask}
                { ...field }
                placeholder="CPF"
                className="p-2 rounded-md border border-Concrete"
              />
            )}
          />
          {errors.cpf && (
            <span className="text-Red70 text-xs">
              {errors.cpf.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Senha"
            className="p-2 rounded-md border border-Concrete"
          />
          {errors.password && (
            <span className="text-Red70 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>
        <p className="w-full m-1 text-right text-Concrete">
          <Link to={"/auth/register"}>Esqueceu a senha?</Link>
        </p>
        <button type="submit" className="bg-Blue py-2 rounded-md text-White font-semibold uppercase">
          Entrar
        </button>
      </form>
      <div className="h-28 mt-5 flex justify-between gap-5">
        <div className="w-[175px] h-full flex flex-col justify-end items-end">
          <p className="text-White text-2xl font-bold">SEDUC</p>
          <p className="text-White text-right font-normal">Secretária de Estado da Educação de Alagoas</p>
        </div>
        <img src={GOV} className="max-h-full mx-auto" />
      </div>
    </div>
  );
}

export default LoginPage;
