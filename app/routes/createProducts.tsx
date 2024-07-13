import FormCreateProduct from "~/components/ui/admin/products/FormCreateProduct"

import prisma from "../../prisma/prisma"
import { useLoaderData } from "@remix-run/react"
import { createProduct } from "~/models/products/createProduct"

import { RiAddCircleLine } from "react-icons/ri";



export const loader = async () => {
    const categories = await prisma.category.findMany()
    console.log(categories)
    return {
        categories,
    }
}

export const action = async ({request}: ActionArgs) => {
    const formData = await request.formData();
    const barCode = await formData.get("barCode");
    const name = await formData.get("name");
    const stock = await formData.get("stock");
    const price = await formData.get("price");
    const cost = await formData.get("cost");
    const description = await formData.get("description");
    const category = await formData.get("category");

    if(!barCode) throw new Error("Ingresa el codigo de barras del product.")
    if(!name) throw new Error("Ingresa el nombre para el producto.")
    if(!price) throw new Error("Ingresa el precio para el producto.")
    if(!cost) throw new Error("Ingresa cuanto te costo el producto.")
    if(!category) throw new Error("Ingresa a que categoria pertenece el producto.")
    if(!description) throw new Error("Ingresa una descripcion para el producto.")

    const newProduct = await createProduct({
        barCode,
        name,
        stock,
        price,
        cost,
        description,
        category
    })

    return null
    
}

export default function CreateProduct() {

    const { categories } = useLoaderData<typeof loader>();
    const categoryIds = categories.map(category => ({id: category.id, name: category.name}));
    console.log(categoryIds)

    return (
        <div className="m-3 items-center justify-center h-screen w-full space-y-4">
            <h1 className="flex flex-row items-end mb-3 text-2xl text-[#252525] dark:text-white">
                <RiAddCircleLine className="text-[#5a6e8a] mr-1 w-8 h-8"/>
                Crear Producto
            </h1>
            <FormCreateProduct categoryData={categoryIds} />
        </div>
    )
}