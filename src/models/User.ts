import z from "zod";
import { Role } from "./Role";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  cpf: string;
  email: string;
  gender: string;
  race: string;
  phone: string;
  occupation: string;
  idAddress: string;
  roles: Role[];
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
