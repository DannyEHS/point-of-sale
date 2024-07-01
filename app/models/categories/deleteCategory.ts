import prisma from "../../../prisma/prisma";

export const deleteCategory = async (id: string) => {
    try {
        const deletedCategory = await prisma.category.delete({
            where: { id },
        });
        return deletedCategory;
    } catch (error) {
        console.error(`Error al eliminar la categoría con ID ${id}:`, error);
        throw new Error(`Error al eliminar la categoría.`);
    }
};
