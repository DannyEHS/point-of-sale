import prisma from "../../prisma/prisma";
import { rolValidation } from "~/validations/roles/rolSchema";

export const createRol = async (data: {
  name: string;
  description: string;
  routes: string;
}) => {
  try {
    rolValidation.parse(data);
    const newRol = await prisma.rol.create({
      data: {
        name: data.name,
        description: data.description,
        routes: data.routes
      },
    });
    return newRol;
  } catch (error) {
    throw new Error(`Error al crear el rol: ${error}`);
  }
};
