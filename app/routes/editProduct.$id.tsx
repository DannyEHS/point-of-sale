import FormEditProduct from "~/components/ui/admin/products/FormEditProduct";
import prisma from '../../prisma/prisma'
import { redirect, useLoaderData } from '@remix-run/react';
import { updateProduct } from "~/models/products/updateProduct";

type Params = {
    params: string | any;
}

export const action = async ({ request, params }: ActionArgs) => {
    try {

        const id = params.id;
        console.log(id)
        const formData = await request.formData();
        const barCode = await formData.get("barCode");
        const name = await formData.get("name");
        const stock = await formData.get("stock");
        const price = await formData.get("price");
        const cost = await formData.get("cost");
        const description = await formData.get("description");
        const category = await formData.get("category");

        if(!barCode){
            throw new Error("Ingresa el nuevo codig de barras.")
        }
        if(!name){
            throw new Error("Ingresa el nuevo nombre.")
        }
        if(!stock){
            throw new Error("Ingresa la nueva canteidad.")
        }
        if(!price){
            throw new Error("Ingresa el nuevo precio.")
        }
        if(!cost){
            throw new Error("Ingresa el nuevo costo")
        }
        if(!description){
            throw new Error("Ingresa la nueva descripcion.")
        }
        if(!category){
            throw new Error("Ingresa la nueva categoria.")
        }

        const updateData = await updateProduct({
            id: id,
            barCode: barCode,
            name: name,
            stock: stock,
            price: price,
            cost: cost,
            description: description,
            category: category,
        })
        console.log("Producto actualizado: ", updateData)
        return redirect("/admin/products");
    }
    catch(error) {
        throw new Error("No se actualizo la informacion.")
    }
}

export const loader = async ({ params }: Params) => {
    const { id } = params;

    const product = await prisma.product.findUnique({
        where: {
            id
        },
        include: {
          category: true
        }
    });

    const categories = await prisma.category.findMany();

    return { product, categories };
}

export default function EditProduct() {

    const { product, categories } = useLoaderData<typeof loader>();

    return(
        <div className="m-3 items-center justify-center h-screen w-full space-y-4">
            <h1 className="mb-3 text-2xl text-[#3d3d3d] dark:text-white">
                Editar Producto
            </h1>
            <FormEditProduct 
                data={product} 
                categoryData={categories} 
                nameInput={
                    {
                        barCode: "barCode", 
                        name: "name",
                        stock: "stock",
                        price: "price",
                        cost: "cost",
                    }
                } 
                nameTextArea='description'  
                nameSelect="category"
            />
        </div>
    )
}