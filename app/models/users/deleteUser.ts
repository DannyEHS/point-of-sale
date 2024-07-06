import prisma from "../../../prisma/prisma";

export const deleteUser = async (id: string) => {
    try{
        const deletedUser = await prisma.user.delete({
            where: { id },
        })
    } catch(error){
        console.error(`Error al eliminar el usuario con ID ${id}:`, error);
        throw new Error(`Error al eliminar el usuario.`);
    }
}