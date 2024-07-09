import * as z from "zod";

// Esquema de validación para los roles
export const rolValidation = z.object({
  name: z
    .string({
      required_error: "El nombre del rol es requerido.",
      invalid_type_error: "El nombre debe ser una cadena.",
    })
    .min(3, "El nombre del rol debe tener al menos 3 caracteres"),
  description: z.string().optional(),
  routes: z
    .string({
      required_error: "Las rutas del rol son requeridas.",
      invalid_type_error: "Las rutas deben ser una cadena.",
    })
    .min(1, "Debe especificar al menos una ruta"),
});
