import { productValidation } from "~/validations/products/productSchema";
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
    console.log("Datos de entrada:", data);
    productValidation.parse(data);
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
  } catch (error: any) {
    console.error("Error al crear producto:", error);
    throw new Error(error.message || "Error al crear producto.");
  }
};
