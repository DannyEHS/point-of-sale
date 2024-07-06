import * as z from 'zod';

export const userSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  phone: z.string().min(10, "El numero de telefono debe tener minimo 10 digitos"),
  password: z.string().min(8, "La clave debe tener minimo 8 caracteres"),
  rolId: z.string(),
});