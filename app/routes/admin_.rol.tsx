import React, { useState } from "react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import TableRol from '~/components/ui/admin/rol/TableRol';
import { Link, useLoaderData } from "@remix-run/react";
import prisma from "../../prisma/prisma";
import { deleteRol } from "~/models/deleteRol";

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
    const [searchTerm, setSearchTerm] = useState("");

    const filteredRoles = roles.filter((rol) =>
        rol.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="items-center justify-start h-screen w-full">
            <div className="m-3 space-y-4">
                <h1 className="mb-3 text-xl text-[#3d3d3d] dark:text-white">Roles</h1>
                <div className="flex flex-row w-full items-center space-x-2">
                    <Input
                        className="w-96"
                        placeholder="Buscar rol"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Link to="/createRol">
                        <Button>Apachurrame</Button>
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <TableRol data={filteredRoles} />
                </div>
            </div>
        </div>
    );
}
