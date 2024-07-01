import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { Link, useLoaderData } from "@remix-run/react";
import TableProducts from "~/components/ui/admin/products/TableProducts";
import prisma from "prisma/prisma";

export const loader = async () => {
    const categories = await prisma.category.findMany();
    const productsAndCategories = await prisma.product.findMany({
        include: {
            category: true,
        },
    });
    
    console.log(productsAndCategories)
    return{
        products: productsAndCategories
    }
}


export default function Products() {

    const { products } = useLoaderData<typeof loader>();

    return(
        <div className="m-3 items-center justify-start h-screen w-full space-y-4">
            <h1 className="mb-3 text-xl text-[#3d3d3d] dark:text-white">
                Productos
            </h1>
            <div className="flex flex-row w-full items-center space-x-2">
                <Input className="w-96" placeholder="Buscar usuario" />
                <Link to="/createProducts">
                    <Button>Crear Producto</Button>
                </Link>
            </div>
            <div className="flex flex-col items-center justify-center">
                <TableProducts data={products}/>
            </div>
        </div>
    )
}