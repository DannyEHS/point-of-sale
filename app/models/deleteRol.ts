import prisma from "../../prisma/prisma";

export const deleteRol = async (id: string) => {
    try {
        const deletedRol = await prisma.rol.delete({
            where: { id },
        });
        return deletedRol;
    } catch (error) {
        console.error(`Error al eliminar el rol con ID ${id}:`, error);
        throw new Error(`Error al eliminar el rol.`);
    }
};
