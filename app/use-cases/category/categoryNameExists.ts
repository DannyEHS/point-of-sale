import prisma from "prisma/prisma";

export const categoryNameExist = async (name: string) => {
  const existingName = await prisma.category.findFirst({
    where: {
      name: name,
    },
  });
  console.log(existingName)
  return existingName !== null;
};
