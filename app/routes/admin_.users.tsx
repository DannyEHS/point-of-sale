import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import TableUsers from '~/components/ui/admin/users/TableUsers'
import { Link } from "@remix-run/react";

export default function Users() {
    return (
        <div className="items-center justify-start h-screen w-full">
            <div className="m-3 space-y-4">
                <h1 className="mb-3 text-xl text-[#3d3d3d] dark:text-white">
                    Usuarios
                </h1>
                <div className="flex flex-row w-full items-center space-x-2">
                    <Input className="w-96" placeholder="Buscar usuario" />
                    <Link to="/createUser">
                        <Button>Apachurrame</Button>
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <TableUsers />
                </div>
            </div>
        </div>
    );
}