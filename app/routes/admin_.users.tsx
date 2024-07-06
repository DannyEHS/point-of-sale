import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import TableUsers from '~/components/ui/admin/users/TableUsers'
import { Link, useLoaderData } from "@remix-run/react";

import prisma from "prisma/prisma";

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

export default function Users() {

    const { users } = useLoaderData<typeof loader>();

    return (
        <div className="items-center justify-start h-screen w-full">
            <div className="m-3 space-y-4">
                <h1 className="mb-3 text-xl text-[#3d3d3d] dark:text-white">
                    Usuarios
                </h1>
                <div className="flex flex-row w-full items-center space-x-2">
                    <Input className="w-96" placeholder="Buscar usuario" />
                    <Link to="/createUser">
                        <Button>Crear usuario</Button>
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <TableUsers data={users}/>
                </div>
            </div>
        </div>
    );
}