import prisma from "../../../prisma/prisma";

export const updateCategory = async (data: {
  id: string;
  name?: string;
  description?: string;
  products?: {
    id?: string;
    name?: string;
    description?: string;
    barCode?: string;
    price?: string;
    cost?: string;
    stock?: string;
  }[];
}) => {
  try {
    const updatedCategory = await prisma.category.update({
      where: { id: data.id },
      data: {
        ...(data.name && { name: data.name }),
        ...(data.description && { description: data.description }),
        ...(data.products && {
          products: {
            upsert: data.products.map((product) => ({
              where: { id: product.id || "" },
              update: {
                ...(product.name && { name: product.name }),
                ...(product.description && {
                  description: product.description,
                }),
                ...(product.barCode && { barCode: product.barCode }),
                ...(product.price && { price: product.price }),
                ...(product.cost && { cost: product.cost }),
                ...(product.stock && { stock: product.stock }),
              },
              create: {
                name: product.name!,
                description: product.description!,
                barCode: product.barCode!,
                price: product.price!,
                cost: product.cost!,
                stock: product.stock!,
              },
            })),
          },
        }),
      },
      include: {
        products: true,
      },
    });
    return updatedCategory;
  } catch (error) {
    console.error(`Error al actualizar la categoría con ID ${data.id}:`, error);
    throw new Error(`Error al actualizar la categoría.`);
  }
};
