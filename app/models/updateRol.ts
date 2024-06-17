import prisma from "../../prisma/prisma";

export const updateRol = async (data: {
    id: string;
    name: string;
    description: string;
}) => {
    try {
        const updateRol = await prisma.rol.update({
            where: { id: data.id },
            data: {
                name: data.name,
                description: data.description
            }
        });
        return updateRol;
    } catch (error) {
        throw new Error(`Error al actualizar el rol: ${error}`);
    }
};