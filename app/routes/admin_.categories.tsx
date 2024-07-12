import { Input } from "~/components/ui/input"
import { Link, useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button"
import TableCategories from "~/components/ui/admin/categories/TableCategories"

import prisma from "../../prisma/prisma"

import useFilterCategories from "~/hooks/categories/useFilterCategory";

export const loader = async () => {
    const categories = await prisma.category.findMany()
    console.log(categories)
    return {
        categories
    }
}

export default function Categories() {

    const { categories } = useLoaderData<typeof loader>();
    const { searchTerm, setSearchTerm, filteredCategory } = useFilterCategories(categories)

    return (
        <div className="items-center justify-start h-screen w-full space-y-4">
            <div className="m-3 space-y-4">
                <h1 className="mb-3 text-xl text-[#3d3d3d] dark:text-white">
                    Categorias
                </h1>
                <div className="flex flex-row w-full items-center space-x-2">
                    <Input 
                        className="w-96" 
                        placeholder="Buscar categoria" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Link to="/createCategory">
                        <Button>Crear Categoria</Button>
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <TableCategories data={filteredCategory} />
                </div>
            </div>

        </div>
    );
}