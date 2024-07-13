import { Input } from "~/components/ui/input"
import { Link, useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button"
import TableCategories from "~/components/ui/admin/categories/TableCategories"
import TooltipInfo from "~/components/ui/general/TooltipInfo";

import prisma from "../../prisma/prisma"

import useFilterCategories from "~/hooks/categories/useFilterCategory";

import { RiAddLine, RiCornerDownLeftFill, RiDashboardHorizontalLine } from "react-icons/ri";

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
                <h1 className="flex flex-row items-end mb-3 text-2xl text-[#252525] dark:text-white">
                    <RiDashboardHorizontalLine className="text-[#5a6e8a] mr-1 w-10 h-10" />
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
                        <TooltipInfo
                            element={
                                <Button className="bg-[#3f4d65] hover:bg-[#5a6e8a]">
                                    <RiAddLine className="w-5 h-5 mr-1" />
                                    Crear categoria
                                </Button>
                            }
                            text="Este boton te llevara al apartado donde podras crear a tus productos"
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
                    <TableCategories data={filteredCategory} />
                </div>
            </div>

        </div>
    );
}