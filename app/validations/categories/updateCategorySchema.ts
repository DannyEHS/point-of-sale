import * as z from "zod";
import { updateProductValidation } from "../products/updateProductSchema";

export const updateCategoryValidation = z.object({
  id: z.string({
    required_error: "El ID de la categoría es requerido.",
    invalid_type_error: "El ID debe ser una cadena.",
  }),
  name: z.string().optional(),
  description: z.string().optional(),
  products: z.array(updateProductValidation).optional(),
});
