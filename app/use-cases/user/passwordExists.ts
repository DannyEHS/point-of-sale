import prisma from "prisma/prisma";

export const passwordUserExist = async (password: string) => {
  const existingPassword = await prisma.user.findFirst({
    where: {
      password: password,
    },
  });

  return existingPassword !== null;
};