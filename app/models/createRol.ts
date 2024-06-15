import prisma from "../../prisma/prisma";

export const createRol = async (data: {
  name: string;
  description: string;
}) => {
  try {
    const newRol = await prisma.rol.create({
      data: {
        name: data.name,
        description: data.description,
      },
    });
    return newRol;
  } catch (error) {
    throw new Error(`Error al crear el rol: ${error}`);
  }
};
