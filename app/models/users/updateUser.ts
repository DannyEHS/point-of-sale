// ~/models/users/updateUser.ts
import { updateUserValidation } from "~/validations/users/updateUserScheme";
import prisma from "../../../prisma/prisma";

export const updateUser = async (data: {
  id: string;
  name?: string;
  lastName?: string;
  phone?: string;
  password?: string;
  rol?: string;
}) => {
  try {
    updateUserValidation.parse(data);
    const updatedUser = await prisma.user.update({
      where: { id: data.id },
      data: {
        ...(data.name && { name: data.name }),
        ...(data.lastName && { lastName: data.lastName }),
        ...(data.phone && { phone: data.phone }),
        ...(data.password && { password: data.password }),
        ...(data.rol && {
          rol: {
            connect: {
              id: data.rol,
            },
          },
        }),
      },
    });
    return updatedUser;
  } catch (error) {
    console.error(`Error al actualizar el usuario con ID ${data.id}:`, error);
    throw new Error("Error al actualizar el usuario.");
  }
};
