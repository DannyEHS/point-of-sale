import * as z from "zod";

export const updateProductValidation = z.object({
  id: z.string({
    required_error: "El ID del producto es requerido.",
    invalid_type_error: "El ID debe ser una cadena.",
  }),
  name: z.string().optional(),
  description: z.string().optional(),
  barCode: z
    .string()
    .min(8, "El código de barras debe tener al menos 8 caracteres")
    .max(48, "El código de barras debe tener como máximo 48 caracteres")
    .optional(),
  price: z.string().optional(),
  cost: z.string().optional(),
  stock: z.string().optional(),
  categoryId: z.string().optional(),
});
