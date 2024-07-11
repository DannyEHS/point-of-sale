import * as z from "zod";

export const userValidation = z.object({
  name: z
    .string({
      required_error: "El nombre del usuario es requerido.",
      invalid_type_error: "El nombre debe ser una cadena.",
    })
    .min(1, "El nombre del usuario es requerido."),
  lastName: z
    .string({
      required_error: "El apellido del usuario es requerido.",
      invalid_type_error: "El apellido debe ser una cadena.",
    })
    .min(1, "El apellido del usuario es requerido."),
  phone: z
    .string({
      required_error: "El número de teléfono es requerido.",
      invalid_type_error: "El número de teléfono debe ser una cadena.",
    })
    .min(10, { message: "El número de teléfono debe tener mínimo 10 dígitos" })
    .regex(/^\d+$/, {
      message: "El número de teléfono solo debe contener dígitos",
    }),
  password: z
    .string({
      required_error: "La clave es requerida.",
      invalid_type_error: "La clave debe ser una cadena.",
    })
    .min(8, { message: "La clave debe tener mínimo 8 caracteres" })
    .regex(/[A-Za-z0-9]/, {
      message: "La clave debe contener al menos una letra y un número.",
    }),
  rol: z
    .string({
      required_error: "El rol del usuario es requerido.",
      invalid_type_error: "El rol debe ser una cadena.",
    })
    .min(1, "El rol del usuario es requerido."),
});
