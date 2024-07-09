import * as z from "zod";

export const updateRolValidation = z.object({
  id: z.string({
    required_error: "El ID del rol es requerido.",
    invalid_type_error: "El ID debe ser una cadena.",
  }),
  name: z.string().optional(),
  description: z.string().optional(),
  routes: z.string().optional(),
});
