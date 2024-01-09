import z from "zod";
export interface Role {
  id: number;
  name: string;
}

export interface UserOutput {
  id: string;
  firstName: string;
  lastName: string;
  cpf: string;
  roles: Role[];
}

export interface AuthenticationOutput {
  user: UserOutput;
  tkoen: string;
}

export const LoginInputSchema = z.object({
  cpf: z
    .string()
    .min(11, "O CPF deve conter 11 dígitos")
    .refine(
      (cpf) => cpf.replace(/[^\d]/g, "").length === 11,
      "O CPF deve ter 11 dígitos"
    ),
  password: z.string().min(6, "O Password deve conter no mínimo 6 dígitos"),
});

export type LoginInput = z.infer<typeof LoginInputSchema>;
