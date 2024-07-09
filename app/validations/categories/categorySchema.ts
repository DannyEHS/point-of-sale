import * as z from "zod";
import { productValidation } from "~/validations/products/productSchema";

export const categoryValidation = z.object({
  name: z.string({
    required_error: "El nombre de la categoría es requerido.",
    invalid_type_error: "El nombre debe ser una cadena.",
  }),
  description: z.string().optional(),
  products: z.array(productValidation).optional(),
});
