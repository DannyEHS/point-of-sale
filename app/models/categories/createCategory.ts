import prisma from "../../../prisma/prisma";
import { categoryValidation } from "~/validations/categories/categorySchema";

export const createCategory = async (data: {
  name: string;
  description: string;
  products?: {
    name: string;
    description: string;
    barCode: string;
    price: string;
    cost: string;
    stock: string;
  }[];
}) => {
  try {
    console.log("Datos de entrada:", data);
    categoryValidation.parse(data);
    const newCategory = await prisma.category.create({
      data: {
        name: data.name,
        description: data.description,
        products: {
          create: data.products,
        },
      },
      include: {
        products: true,
      },
    });
    return newCategory;
  } catch (error: any) {
    console.error("Error al crear categoria:", error);
    throw new Error(error.message || "Error al crear categoria.");
  }
};
