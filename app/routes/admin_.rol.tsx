import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import TableRol from '~/components/ui/admin/rol/TableRol'
import { Link } from "@remix-run/react";

export default function Rol() {
    return (
        <div className="m-3 items-center justify-start h-screen w-full space-y-4">
            <h1 className="mb-3 text-xl text-[#3d3d3d] dark:text-white">
                Roles
            </h1>
            <div className="flex flex-row w-full items-center space-x-2">
                <Input className="w-96" placeholder="Buscar usuario" />
                <Link to="/createRol">
                    <Button>Apachurrame</Button>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center">
                <TableRol />
            </div>
        </div>
    );
}