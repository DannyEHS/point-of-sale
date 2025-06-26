import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import TableUsers from '~/components/ui/admin/users/TableUsers'
import { Link, redirect, useLoaderData } from "@remix-run/react";
import TooltipInfo from "~/components/ui/general/TooltipInfo";


import prisma from "prisma/prisma";
import { deleteUser } from "~/models/users/deleteUser";

import useFilterUsers from "~/hooks/users/useFilterUser";
import { RiCornerDownLeftFill, RiAddLine, RiUser3Line } from "react-icons/ri";




export const loader = async () => {
    const roles = await prisma.rol.findMany();
    const usersAndRoles = await prisma.user.findMany({
        include: {
            rol: true,
        },
    });

    console.log(usersAndRoles);
    return {
        users: usersAndRoles
    }
}

export const action = async ({ request }: ActionArgs) => {
    try {
        const formData = await request.formData();
        const id = formData.get("id");

        if (!id || typeof id !== "string") {
            throw new Error("ID inválido para el usuario a eliminar");
        }

        const deleteData = await deleteUser(id)
        console.log("Data del usuario eliminado: ", deleteData);
        return redirect("/admin/users");
    } catch (error) {
        console.error(`Error en la acción de eliminación del usuario:`, error);
        throw new Error(`Error al eliminar el usuario`);
    }
}

export default function Users() {

    const { users } = useLoaderData<typeof loader>();
    const { searchTerm, setSearchTerm, filteredUser } = useFilterUsers(users)
    console.log({ RiCornerDownLeftFill, RiAddLine, RiUser3Line });

    return (
        <div className="items-center justify-start h-screen w-full">
            <div className="m-3 space-y-4">
                <h1 className="flex flex-row items-end mb-3 text-2xl text-[#252525] dark:text-white">
                    <RiUser3Line className="text-[#5a6e8a] mr-1 w-10 h-10" />
                    Usuarios
                </h1>
                <div className="flex flex-row w-full items-center space-x-2">
                    <Input
                        className="w-96"
                        placeholder="Buscar usuario"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Link to="/createUser">
                        <TooltipInfo
                            element={
                                <Button className="flex flex-row bg-[#5a6e8a] hover:bg-[#4d5f7c]">
                                    <RiAddLine className="w-5 h-5 mr-1" />
                                    Crear usuario
                                </Button>
                            }
                            text="Este boton te llevara de regreso al menu anterior en administracion"
                        />
                    </Link>
                    <Link to="/admin">
                        <TooltipInfo
                            element={
                                <Button className="flex flex-row bg-[#5a6e8a] hover:bg-[#4d5f7c]">
                                    <RiCornerDownLeftFill className="w-5 h-5 mr-1" />
                                    Regresar
                                </Button>
                            }
                            text="Este boton te llevara de regreso al menu anterior en administracion"
                        />
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <TableUsers data={filteredUser} />
                </div>
            </div>
        </div>
    );
}