import prisma from "prisma/prisma";

export const BarCodeExist = async (barcode: string) => {
  const existingProduct = await prisma.product.findFirst({
    where: {
      barCode: barcode,
    },
  });

  return existingProduct !== null;
};
