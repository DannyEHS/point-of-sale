import prisma from "prisma/prisma";

export const rolNameExist = async (name: string) => {
  const existingName = await prisma.rol.findFirst({
    where: {
      name: name,
    },
  });

  return rolNameExist !== null;
};