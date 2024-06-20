import { Input } from "~/components/ui/input"
import { Link, useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button"
import TableCategories from "~/components/ui/admin/categories/TableCategories"

import prisma from "../../prisma/prisma"

export const loader = async () => {
    const categories = await prisma.category.findMany()
    console.log(categories)
    return {
        categories
    }
}

export default function Categories() {

    const { categories } = useLoaderData<typeof loader>();

    return (
        <div className="m-3 items-center justify-start h-screen w-full space-y-4">
            <h1 className="mb-3 text-xl text-[#3d3d3d] dark:text-white">
                Categorias
            </h1>
            <div className="flex flex-row w-full items-center space-x-2">
                <Input className="w-96" placeholder="Buscar categoria" />
                <Link to="/createCategory">
                    <Button>Crear Categoria</Button>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center">
                <TableCategories data={categories}/>
            </div>
        </div>
    );
}