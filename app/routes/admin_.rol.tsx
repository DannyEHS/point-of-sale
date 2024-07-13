import React, { useState } from "react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import TableRol from '~/components/ui/admin/rol/TableRol';
import TooltipInfo from "~/components/ui/general/TooltipInfo";
import { Link, redirect, useLoaderData } from "@remix-run/react";
import prisma from "../../prisma/prisma";
import { deleteRol } from "~/models/deleteRol";

import useFilteredRoles from "~/hooks/roles/useFilterRol"
import { RiAddLine, RiCornerDownLeftFill, RiShieldCheckLine } from "react-icons/ri";

export const loader = async () => {
    const roles = await prisma.rol.findMany();
    return { roles };
};

export const action = async ({ request }: ActionArgs) => {
    try {
        const formData = await request.formData();
        const id = formData.get("id");

        if (!id || typeof id !== "string") {
            throw new Error("ID inválido para el rol a eliminar");
        }

        const deleteData = await deleteRol(id);
        return redirect("/admin/rol");
    } catch (error) {
        console.error(`Error en la acción de eliminación del rol:`, error);
        throw new Error(`Error al eliminar el rol`);
    }
};

export default function Rol() {
    const { roles } = useLoaderData<typeof loader>();
    const { searchTerm, setSearchTerm, filteredRoles } = useFilteredRoles(roles);

    return (
        <div className="items-center justify-start h-screen w-full">
            <div className="m-3 space-y-4">
                <h1 className="flex flex-row items-end mb-3 text-2xl text-[#252525] dark:text-white">
                    <RiShieldCheckLine className="text-[#5a6e8a] mr-1 w-10 h-10" />
                    Roles y Permisos
                </h1>
                <div className="flex flex-row w-full items-center space-x-2">
                    <Input
                        className="w-96"
                        placeholder="Buscar rol"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Link to="/createRol">
                        <TooltipInfo
                            element={
                                <Button className="bg-[#3f4d65] hover:bg-[#5a6e8a]">
                                    <RiAddLine className="w-5 h-5 mr-1" />
                                    Crear rol
                                </Button>
                            }
                            text="Este boton te llevara al apartado donde podras crear a tus usuarios"
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
                    <TableRol data={filteredRoles} />
                </div>
            </div>
        </div>
    );
}
