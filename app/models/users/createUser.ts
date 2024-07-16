// ~/models/users/createUser.ts
import { userValidation } from "~/validations/users/userSchema";
import prisma from "../../../prisma/prisma";
import { passwordUserExist } from "~/use-cases/user/passwordExists";

export const createUser = async (data: {
  name: string;
  lastName: string;
  phone: string;
  password: string;
  rol: string;
}) => {
  try {
    
    userValidation.parse(data);

    const newUser = await prisma.user.create({
      data: {
        name: data.name,
        lastName: data.lastName,
        phone: data.phone,
        password: data.password,
        rol: {
          connect: {
            id: data.rol,
          },
        },
      },
    });
    return newUser;
  } catch (error: any) {
    console.error("Error al crear usuario:", error);
    throw new Error(error.message || "Error al crear usuario.");
  }
};
