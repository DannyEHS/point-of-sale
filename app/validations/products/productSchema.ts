import * as z from "zod";

export const productValidation = z.object({
  barCode: z
    .string({
      required_error: "El código de barras es requerido.",
      invalid_type_error: "El código de barras debe ser una cadena.",
    })
    .min(8, "El código de barras debe tener al menos 8 caracteres.")
    .max(48, "El código de barras no debe exceder los 48 caracteres."),
  name: z
    .string({
      required_error: "El nombre del producto es requerido.",
      invalid_type_error: "El nombre debe ser una cadena.",
    })
    .min(1, "El nombre del producto es requerido."),
  price: z
    .string({
      required_error: "El precio del producto es requerido.",
      invalid_type_error: "El precio debe ser una cadena.",
    })
    .regex(/^\d+(\.\d{1,2})?$/, "El precio debe ser un número válido."),
  cost: z
    .string({
      required_error: "El costo del producto es requerido.",
      invalid_type_error: "El costo debe ser una cadena.",
    })
    .regex(/^\d+(\.\d{1,2})?$/, "El costo debe ser un número válido."),
  stock: z
    .string({
      required_error: "El stock del producto es requerido.",
      invalid_type_error: "El stock debe ser una cadena.",
    })
    .regex(/^\d+$/, "El stock debe ser un número entero válido."),
  description: z
    .string({
      invalid_type_error: "La descripción debe ser una cadena.",
    })
    .optional(),
  category: z
    .string({
      required_error: "La categoría del producto es requerida.",
      invalid_type_error: "La categoría debe ser una cadena.",
    })
    .min(1, "La categoría del producto es requerida."),
});
