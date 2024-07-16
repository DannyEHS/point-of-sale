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
    const model = await formData.get("model")
    const name = await formData.get("name");
    const stock = await formData.get("stock");
    const price = await formData.get("price");
    const cost = await formData.get("cost");
    const description = await formData.get("description");
    const category = await formData.get("category");

    if(price < cost) {
        throw new Error("El precio no puede ser menor a lo que te costo.")
    } 
    if (cost > price) {
        throw new Error("El costo no puede ser mayor a como lo vas a vender.")
    }

    const newProduct = await createProduct({
        barCode,
        model,
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