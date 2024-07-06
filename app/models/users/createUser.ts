import prisma from "../../../prisma/prisma";

export const createUser = async (data: {
  name: string;
  lastName: string;
  phone: string;
  password: string;
  rol: string;
}) => {
  try {
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
  } catch (error) {
    throw new Error("Error al crear usuario.");
  }
};
