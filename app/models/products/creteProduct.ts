import prisma from "../../../prisma/prisma";

export const createProduct = async (data: {
  barCode: string;
  name: string;
  price: string;
  cost: string;
  stock: string;
  description: string;
  category: string;
}) => {
  try {
    const newProduct = await prisma.product.create({
      data: {
        category: {
          connect: {
            id: data.category,
          },
        },
        barCode: data.barCode,
        name: data.name,
        price: data.price,
        cost: data.cost,
        stock: data.stock,
        description: data.description,
      },
    });
    return newProduct;
  } catch (error) {
    throw new Error("Error al crear producto.");
  }
};
