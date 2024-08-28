import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { useAPI } from './../axios';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export function useLogin() {
    const instance = useAPI();
    const signIn = useSignIn();
    const navigate = useNavigate();
    
    const handleLoginSubmit = async (cpf: string, password: string) => {
        try {
            const response = await instance.post("/login", {
                cpf: cpf.replace(/[^\d]/g, ""),
                password,
            });

            const { user, token } = await response.data;

            if (
                signIn({
                    auth: {
                        token: token,
                        type: "Bearer",
                    },
                    userState: user,
                })
            ) {
                localStorage.setItem("currentRole", user.roles[0]);
                navigate("/");
            }
        } catch (error) {
            switch ((error as AxiosError)?.response?.status) {
                case 404:
                    toast.error("Usuário ou senha inválidos");
                    break;
                default:
                    toast.error("Erro ao realizar login");
            }
        }
    };

    return { handleLoginSubmit };
}