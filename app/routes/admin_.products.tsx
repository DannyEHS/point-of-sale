import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Link, redirect, useLoaderData } from "@remix-run/react";
import TableProducts from "~/components/ui/admin/products/TableProducts";
import TooltipInfo from "~/components/ui/general/TooltipInfo";

import prisma from "prisma/prisma";
import { deleteProduct } from "~/models/products/deleteProduct";
import useFilterProducts from "~/hooks/products/useFilterProduct";

import { RiArchive2Line } from "react-icons/ri";
import { RiAddLine } from "react-icons/ri";
import { RiCornerDownLeftFill } from "react-icons/ri";

export const loader = async () => {
    const categories = await prisma.category.findMany();
    const productsAndCategories = await prisma.product.findMany({
        include: {
            category: true,
        },
    });

    console.log(productsAndCategories)
    return {
        products: productsAndCategories
    }
}

export const action = async ({ request }: ActionArgs) => {
    try {
        const formData = await request.formData();
        const id = formData.get("id");

        if (!id || typeof id !== "string") {
            throw new Error("ID inválido para el rol a eliminar");
        }

        const deleteData = await deleteProduct(id)
        console.log("Data del rol eliminado: ", deleteData);
        return redirect("/admin/products");
    } catch (error) {
        console.error(`Error en la acción de eliminación del producto:`, error);
        throw new Error(`Error al eliminar el producto`);
    }
}


export default function Products() {

    const { products } = useLoaderData<typeof loader>();
    const { searchTerm, setSearchTerm, filteredProducts } = useFilterProducts(products)

    return (
        <div className="items-center justify-start h-screen w-full ">
            <div className="m-3 space-y-4">
                <h1 className="flex flex-row items-end mb-3 text-2xl text-[#252525] dark:text-white">
                    <RiArchive2Line className="text-[#5a6e8a] mr-1 w-10 h-10" />
                    Productos
                </h1>
                <div className="flex flex-row w-full items-center space-x-2">
                    <Input
                        className="w-96"
                        placeholder="Buscar productos"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Link to="/createProducts">
                        <TooltipInfo
                            element={
                                <Button className="bg-[#3f4d65] hover:bg-[#5a6e8a]">
                                    <RiAddLine className="w-5 h-5 mr-1" />
                                    Crear Producto
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
                    <TableProducts data={filteredProducts} />
                </div>
            </div>

        </div>
    )
}