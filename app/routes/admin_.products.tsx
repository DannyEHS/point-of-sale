import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Link } from "@remix-run/react";
import TableProducts from "~/components/ui/admin/products/TableProducts";


export default function Products() {
    return(
        <div className="m-3 items-center justify-start h-screen w-full space-y-4">
            <h1 className="mb-3 text-xl text-[#3d3d3d] dark:text-white">
                Productos
            </h1>
            <div className="flex flex-row w-full items-center space-x-2">
                <Input className="w-96" placeholder="Buscar usuario" />
                <Link to="/createRol">
                    <Button>Apachurrame</Button>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center">
                <TableProducts />
            </div>
        </div>
    )
}