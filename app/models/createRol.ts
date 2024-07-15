import { rolNameExist } from "~/use-cases/rol/rolNameExists";
import prisma from "../../prisma/prisma";
import { rolValidation } from "~/validations/roles/rolSchema";

export const createRol = async (data: {
  name: string;
  description: string;
  routes: string;
}) => {
  try {
    rolValidation.parse(data);

    const nameExist = await rolNameExist(data.name);
    if (nameExist) {
      throw new Error("Ya existe una rol con este nombre.");
    }

    const newRol = await prisma.rol.create({
      data: {
        name: data.name,
        description: data.description,
        routes: data.routes
      },
    });
    return newRol;
  } catch (error: any) {
    console.error("Error al crear rol:", error);
    throw new Error(error.message || "Error al crear rol.");
  }
};
