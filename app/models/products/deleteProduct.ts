import prisma from "../../../prisma/prisma";

export const deleteProduct = async (id: string) => {
    try {
        const deletedProduct = await prisma.product.delete({
            where: { id },
        });
        return deletedProduct;
    } catch (error) {
        console.error(`Error al eliminar el producto con ID ${id}:`, error);
        throw new Error(`Error al eliminar el producto.`);
    }
};
