import prisma from "../../../prisma/prisma";

export const updateProduct = async (data: {
  id: string;
  barCode?: string;
  name?: string;
  price?: string;
  cost?: string;
  stock?: string;
  description?: string;
  category?: string;
}) => {
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: data.id },
      data: {
        barCode: data.barCode,
        name: data.name,
        price: data.price,
        cost: data.cost,
        stock: data.stock,
        description: data.description,
        ...(data.category && {
          category: {
            connect: {
              id: data.category,
            },
          },
        }),
      },
    });
    return updatedProduct;
  } catch (error) {
    throw new Error(`Error al actualizar el producto: ${error}`);
  }
};
