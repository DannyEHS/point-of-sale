import * as z from "zod";

export const updateUserValidation = z.object({
  id: z.string({
    required_error: "El ID del usuario es requerido.",
    invalid_type_error: "El ID debe ser una cadena.",
  }),
  name: z.string().optional(),
  lastName: z.string().optional(),
  phone: z
    .string()
    .min(10, "El número de teléfono debe tener al menos 10 dígitos")
    .optional(),
  password: z
    .string()
    .min(8, "La clave debe tener al menos 8 caracteres")
    .optional(),
  rolId: z.string().optional(),
});
